"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { footerData } from "@/data/hashtheoryData";

export default function Footer() {
    return (
        <footer id="contact" className="relative pt-24 pb-12 px-6 md:px-12 overflow-hidden">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-theory-purple to-transparent" />

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-theory-purple/10 blur-[150px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        {/* Logo */}
                        <Link href="/" className="group inline-flex flex-col mb-6">
                            <div className="flex flex-col">
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
                            </div>
                        </Link>

                        <p className="font-body text-theory-white/60 mb-6">
                            {footerData.tagline}
                        </p>

                        <div className="flex items-center gap-2 text-theory-white/40">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-body text-sm">{footerData.location}</span>
                        </div>
                    </motion.div>

                    {/* Organization Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="font-heading text-sm uppercase tracking-widest text-theory-purple mb-6">
                            Organization
                        </h4>
                        <ul className="space-y-3">
                            {footerData.links.organization.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="font-body text-theory-white/60 hover:text-theory-bright-purple transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Get Involved Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="font-heading text-sm uppercase tracking-widest text-theory-purple mb-6">
                            Get Involved
                        </h4>
                        <ul className="space-y-3">
                            {footerData.links.getInvolved.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="font-body text-theory-white/60 hover:text-theory-bright-purple transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="font-heading text-sm uppercase tracking-widest text-theory-purple mb-6">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerData.links.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="font-body text-theory-white/60 hover:text-theory-bright-purple transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-theory-gray-light to-transparent mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <p className="font-body text-sm text-theory-white/40">
                        {footerData.copyright}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {footerData.social.map((social) => (
                            <Link
                                key={social.platform}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-theory-purple/30 flex items-center justify-center hover:border-theory-purple hover:bg-theory-purple/10 transition-all duration-300 group"
                                aria-label={social.platform}
                            >
                                <SocialIcon platform={social.platform} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Social Icons Component
function SocialIcon({ platform }: { platform: string }) {
    const iconClass = "w-4 h-4 text-theory-white/60 group-hover:text-theory-purple transition-colors duration-300";

    switch (platform.toLowerCase()) {
        case "twitter":
            return (
                <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            );
        case "instagram":
            return (
                <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" strokeWidth="2" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
            );
        case "linkedin":
            return (
                <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            );
        case "facebook":
            return (
                <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            );
        default:
            return null;
    }
}
