"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface HashTheoryScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames?: number;
    imageFolderPath?: string;
}

export default function HashTheoryScrollCanvas({
    scrollYProgress,
    totalFrames = 240,
    imageFolderPath = "/heroAssets",
}: HashTheoryScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const currentFrameRef = useRef(0);

    // Transform scroll progress to frame index
    const frameIndex = useTransform(
        scrollYProgress,
        [0, 1],
        [0, totalFrames - 1]
    );

    // Preload all images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let loaded = 0;

            const imagePromises = Array.from({ length: totalFrames }, (_, i) => {
                return new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    // Using the ezgif-frame-XXX.jpg naming convention
                    const frameNumber = String(i + 1).padStart(3, "0");
                    img.src = `${imageFolderPath}/ezgif-frame-${frameNumber}.jpg`;

                    img.onload = () => {
                        loaded++;
                        setLoadProgress(Math.round((loaded / totalFrames) * 100));
                        resolve(img);
                    };

                    img.onerror = () => {
                        console.error(`Failed to load frame ${frameNumber}`);
                        reject(new Error(`Failed to load frame ${frameNumber}`));
                    };
                });
            });

            try {
                const results = await Promise.all(imagePromises);
                loadedImages.push(...results);
                setImages(loadedImages);
                setIsLoading(false);
            } catch (error) {
                console.error("Error loading images:", error);
                setIsLoading(false);
            }
        };

        loadImages();
    }, [totalFrames, imageFolderPath]);

    // Draw frame on canvas with High-DPI support
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const renderFrame = (index: number) => {
            const clampedIndex = Math.max(0, Math.min(Math.round(index), images.length - 1));

            if (clampedIndex === currentFrameRef.current && currentFrameRef.current !== 0) {
                return; // Skip if same frame
            }

            currentFrameRef.current = clampedIndex;
            const img = images[clampedIndex];

            if (!img) return;

            // Get device pixel ratio for Retina/4K support
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            // Set canvas dimensions accounting for DPR
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // Scale context to match DPR
            ctx.scale(dpr, dpr);

            // Clear canvas
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Calculate object-fit: cover dimensions
            const imgAspect = img.width / img.height;
            const canvasAspect = rect.width / rect.height;

            let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

            if (imgAspect > canvasAspect) {
                // Image is wider - fit to height
                drawHeight = rect.height;
                drawWidth = rect.height * imgAspect;
                drawX = (rect.width - drawWidth) / 2;
                drawY = 0;
            } else {
                // Image is taller - fit to width
                drawWidth = rect.width;
                drawHeight = rect.width / imgAspect;
                drawX = 0;
                drawY = (rect.height - drawHeight) / 2;
            }

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        };

        // Subscribe to scroll progress changes
        const unsubscribe = frameIndex.on("change", renderFrame);

        // Initial render
        renderFrame(frameIndex.get());

        // Handle resize
        const handleResize = () => {
            renderFrame(frameIndex.get());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [images, frameIndex]);

    return (
        <div className="absolute inset-0 w-full h-full">
            {/* Loading State */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-carbon-black z-20">
                    <div className="relative w-48 h-1 bg-theory-gray rounded-full overflow-hidden">
                        <div
                            className="absolute inset-y-0 left-0 gradient-purple transition-all duration-200"
                            style={{ width: `${loadProgress}%` }}
                        />
                    </div>
                    <p className="mt-4 font-body text-sm text-theory-white/60 uppercase tracking-widest">
                        Loading Experience... {loadProgress}%
                    </p>
                </div>
            )}

            {/* Canvas */}
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    display: isLoading ? "none" : "block",
                }}
            />

            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/40 via-transparent to-carbon-black/60 pointer-events-none" />
        </div>
    );
}
