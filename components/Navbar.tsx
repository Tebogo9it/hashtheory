"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/data/hashtheoryData";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { scrollY } = useScroll();

    const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Glassmorphism Background */}
            <motion.div
                className="absolute inset-0 glass-purple -z-10"
                style={{ opacity: backgroundOpacity }}
            />

            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex flex-col">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col"
                    >
                        <span className="font-heading text-4xl font-extrabold text-[#6D28D9] tracking-tighter leading-none">
                            #theory
                        </span>
                        <div className="flex justify-between w-full mt-1 px-0.5">
                            <div className="flex flex-col leading-[1.1] text-[#6D28D9] font-medium tracking-wide" style={{ fontSize: '0.45rem' }}>
                                <span>CREATIVE</span>
                                <span>STUDIO</span>
                            </div>
                            <div className="flex flex-col leading-[1.1] text-[#6D28D9] font-medium tracking-wide text-right" style={{ fontSize: '0.45rem' }}>
                                <span>SINCE</span>
                                <span>2025</span>
                            </div>
                        </div>
                    </motion.div>
                </Link>

                {/* Navigation Links - Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative font-body text-sm uppercase tracking-widest text-theory-white opacity-70 hover:opacity-100 transition-opacity duration-300 group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-theory-purple group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="hidden md:block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 font-body text-sm uppercase tracking-widest font-semibold border border-theory-purple text-[#6D28D9] hover:bg-[#6D28D9] hover:text-[#FAFAFA] transition-all duration-300 rounded-sm"
                    >
                        Get Involved
                    </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
                    aria-label="Toggle menu"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2 bg-[#6D28D9]' : isScrolled ? 'bg-[#6D28D9]' : 'bg-theory-white'}`} />
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileOpen ? 'opacity-0' : isScrolled ? 'bg-[#6D28D9]' : 'bg-theory-white'}`} />
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2 bg-[#6D28D9]' : isScrolled ? 'bg-[#6D28D9]' : 'bg-theory-white'}`} />
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 right-0 bg-[#e2e2e2]/95 backdrop-blur-xl shadow-xl border-t border-[#0a0a0a]/10 p-6 flex flex-col gap-6 md:hidden z-40"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="font-heading text-xl font-bold tracking-wider text-[#0a0a0a] hover:text-[#6D28D9] transition-colors border-b border-[#0a0a0a]/10 pb-4"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileOpen(false)}
                            className="text-center mt-2 px-6 py-3 font-body text-sm uppercase tracking-widest font-semibold border border-[#6D28D9] text-[#6D28D9] hover:bg-[#6D28D9] hover:text-[#FAFAFA] transition-all duration-300 rounded-sm"
                        >
                            Get Involved
                        </Link>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
