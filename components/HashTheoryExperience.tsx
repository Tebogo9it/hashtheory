"use client";

import { MotionValue, useTransform, motion } from "framer-motion";
import { heroContent, missionContent, impactContent } from "@/data/hashtheoryData";

interface HashTheoryExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function HashTheoryExperience({
    scrollYProgress,
}: HashTheoryExperienceProps) {
    // Phase transitions based on scroll progress
    // 0-33% = Hero, 33-66% = Mission, 66-100% = Impact

    // Hero Phase (0% - 33%)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -50]);

    // Mission Phase (33% - 66%)
    const missionOpacity = useTransform(scrollYProgress, [0.28, 0.38, 0.58, 0.66], [0, 1, 1, 0]);
    const missionY = useTransform(scrollYProgress, [0.33, 0.4, 0.58, 0.66], [50, 0, 0, -50]);

    // Impact Phase (66% - 100%)
    const impactOpacity = useTransform(scrollYProgress, [0.61, 0.71, 0.95, 1], [0, 1, 1, 1]);
    const impactY = useTransform(scrollYProgress, [0.66, 0.75], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12">
                {/* ===== HERO PHASE ===== */}
                <motion.div
                    className="absolute inset-0 flex flex-col justify-center"
                    style={{ opacity: heroOpacity, y: heroY }}
                >
                    <div className="space-y-6">
                        {/* Location Tag */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-3"
                        >
                            <span className="w-8 h-[1px] bg-theory-purple" />
                            <span className="font-body text-xs uppercase tracking-[0.3em] text-theory-bright-purple">
                                {heroContent.location}
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider glitch-text"
                        >
                            <span className="text-theory-white">HASH</span>
                            <span className="text-theory-purple text-glow">THEORY</span>
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="font-body text-xl md:text-2xl text-theory-white/80 max-w-lg tracking-wide"
                        >
                            {heroContent.tagline}
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="pt-4 pointer-events-auto"
                        >
                            <button className="group relative px-8 py-3 border border-theory-purple overflow-hidden">
                                <span className="relative z-10 font-body text-sm uppercase tracking-widest text-theory-purple group-hover:text-white transition-colors duration-300">
                                    {heroContent.cta}
                                </span>
                                <div className="absolute inset-0 gradient-purple translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute bottom-12 left-6 flex flex-col items-center gap-3"
                        >
                            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-theory-white/40">
                                Scroll to explore
                            </span>
                            <div className="w-[1px] h-16 bg-gradient-to-b from-theory-purple to-transparent animate-pulse" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* ===== MISSION PHASE ===== */}
                <motion.div
                    className="absolute inset-0 flex flex-col justify-center"
                    style={{ opacity: missionOpacity, y: missionY }}
                >
                    <div className="max-w-3xl space-y-8">
                        {/* Section Tag */}
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-theory-purple rounded-full pulse-glow" />
                            <span className="font-body text-xs uppercase tracking-[0.3em] text-theory-bright-purple">
                                Our Purpose
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-theory-white tracking-wide">
                            {missionContent.title}
                        </h2>

                        {/* Description */}
                        <p className="font-body text-lg md:text-xl text-theory-white/70 leading-relaxed">
                            {missionContent.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            {missionContent.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="hud-border px-4 py-2 bg-carbon-black/50"
                                >
                                    <span className="font-body text-sm uppercase tracking-wider text-theory-bright-purple">
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ===== IMPACT PHASE ===== */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-end"
                    style={{ opacity: impactOpacity, y: impactY }}
                >
                    <div className="w-full md:w-1/2 lg:w-2/5 space-y-8 text-right">
                        {/* Section Tag */}
                        <div className="flex items-center justify-end gap-3">
                            <span className="font-body text-xs uppercase tracking-[0.3em] text-theory-bright-purple">
                                Making a Difference
                            </span>
                            <div className="w-3 h-3 bg-theory-purple rounded-full pulse-glow" />
                        </div>

                        {/* Title */}
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-theory-white tracking-wide text-glow">
                            {impactContent.title}
                        </h2>

                        {/* Stats */}
                        <div className="space-y-6">
                            {impactContent.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="hud-border p-4 bg-carbon-black/60 backdrop-blur-sm"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="font-heading text-3xl md:text-4xl font-bold text-theory-purple text-glow-strong">
                                            {stat.value}
                                        </span>
                                        <span className="font-body text-sm uppercase tracking-widest text-theory-white">
                                            {stat.label}
                                        </span>
                                        <span className="font-body text-xs text-theory-white/50">
                                            {stat.description}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ===== HUD DECORATIVE ELEMENTS ===== */}
                <div className="absolute top-8 right-6 md:right-12">
                    <div className="flex items-center gap-2 opacity-40">
                        <div className="w-2 h-2 bg-theory-purple rounded-full animate-pulse" />
                        <span className="font-body text-[10px] uppercase tracking-widest">
                            Live Data Feed
                        </span>
                    </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-24 left-6 w-20 h-20 border-l border-t border-theory-purple/20" />
                <div className="absolute bottom-12 right-6 w-20 h-20 border-r border-b border-theory-purple/20" />
            </div>
        </div>
    );
}
