"use client";

import { motion } from "framer-motion";
import { features } from "@/data/hashtheoryData";

export default function Features() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--theory-purple) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-theory-purple rounded-full pulse-glow" />
                        <span className="font-body text-xs uppercase tracking-[0.3em] text-theory-bright-purple">
                            Our Approach
                        </span>
                        <div className="w-3 h-3 bg-theory-purple rounded-full pulse-glow" />
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-theory-white mb-6">
                        How We <span className="text-theory-purple text-glow">Operate</span>
                    </h2>
                </motion.div>

                {/* Features List */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex gap-6"
                        >
                            {/* Number */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 border border-theory-purple/40 flex items-center justify-center group-hover:border-theory-purple group-hover:border-glow transition-all duration-300">
                                    <span className="font-heading text-xl font-bold text-theory-purple">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                <h3 className="font-heading text-xl md:text-2xl font-bold text-theory-white group-hover:text-theory-bright-purple transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="font-body text-theory-white/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col md:flex-row gap-6 items-center p-8 glass-purple rounded-lg">
                        <div className="text-center md:text-left">
                            <h3 className="font-heading text-2xl font-bold text-theory-white mb-2">
                                Ready to Make a Difference?
                            </h3>
                            <p className="font-body text-theory-white/60">
                                Join us in transforming e-waste into education
                            </p>
                        </div>

                        <button className="px-8 py-3 gradient-purple font-body text-sm uppercase tracking-widest text-white font-semibold hover:scale-105 transition-transform duration-300">
                            Partner With Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
