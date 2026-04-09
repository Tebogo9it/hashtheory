"use client";

import { motion } from "framer-motion";
import { missionContent } from "@/data/hashtheoryData";

export default function Mission() {
    return (
        <section id="mission" className="relative py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                        {missionContent.title}
                    </h2>
                    <p className="font-body text-lg md:text-xl text-[#0a0a0a]/80 max-w-3xl mx-auto leading-relaxed">
                        {missionContent.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {missionContent.highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-[#6D28D9]/50 transition-colors"
                        >
                            <h3 className="font-heading text-xl font-semibold mb-3">
                                {highlight}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
