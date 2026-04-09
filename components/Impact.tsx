"use client";

import { motion } from "framer-motion";
import { impactContent } from "@/data/hashtheoryData";

export default function Impact() {
    return (
        <section id="impact" className="relative py-24 px-6 md:px-12 bg-carbon-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                        {impactContent.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {impactContent.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group border-t-4 border-t-[#6D28D9]"
                        >
                            <h3 className="font-heading text-5xl font-extrabold text-[#6D28D9] mb-4">
                                {stat.value}
                            </h3>
                            <h4 className="font-heading text-xl font-semibold mb-2">
                                {stat.label}
                            </h4>
                            <p className="font-body text-[#0a0a0a]/70">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
