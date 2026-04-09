"use client";

import { motion } from "framer-motion";
import { programs } from "@/data/hashtheoryData";
import Drone from "@/components/Drone";
import { Variants } from "framer-motion";

// Icon components
const icons: Record<string, React.ReactNode> = {
    cpu: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M9 9h6v6H9V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5h14v14H5V5z" />
        </svg>
    ),
    recycle: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
    ),
    users: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
    leaf: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
    ),
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25, // Slightly longer stagger for drones to fly in sequentially
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -200 }, // Drones drop in from above
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 14,
            mass: 1.2,
        },
    },
};

export default function ProgramsGrid() {
    return (
        <section id="programs" className="py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24 md:mb-32"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-12 h-[1px] bg-theory-purple" />
                        <span className="font-body text-xs uppercase tracking-[0.3em] text-theory-bright-purple">
                            What We Do
                        </span>
                        <span className="w-12 h-[1px] bg-theory-purple" />
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-theory-white mb-6">
                        Our <span className="gradient-text">Programs</span>
                    </h2>

                    <p className="font-body text-lg text-theory-white/60 max-w-2xl mx-auto">
                        From recycling e-waste to empowering youth with tech skills, our programs create lasting change in Soweto.
                    </p>
                </motion.div>

                {/* Programs Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-24 lg:gap-8 lg:gap-y-32" // Increased bottom gap for drones logic
                >
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            variants={itemVariants}
                            className="group relative pt-[100px]" // Reserve space for the drone at the top
                        >
                            {/* Drone Component hovers above the card */}
                            <Drone />

                            <div className="relative rounded-xl overflow-hidden hud-border p-6 md:p-8 bg-theory-gray/30 backdrop-blur-sm hover:bg-theory-gray/50 transition-all duration-500">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-lg gradient-purple flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {icons[program.icon]}
                                </div>

                                {/* Content */}
                                <div className="space-y-3 relative z-10">
                                    <span className="font-body text-xs uppercase tracking-[0.2em] text-theory-bright-purple">
                                        {program.subtitle}
                                    </span>

                                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-theory-white group-hover:text-glow transition-all duration-300">
                                        {program.title}
                                    </h3>

                                    <p className="font-body text-theory-white/60 leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>

                                {/* Stats Badge */}
                                <div className="mt-6 pt-6 border-t border-theory-purple/20 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <span className="font-body text-sm text-theory-purple font-semibold">
                                            {program.stats}
                                        </span>

                                        <button className="flex items-center gap-2 font-body text-xs uppercase tracking-wider text-theory-white/60 hover:text-theory-purple transition-colors duration-300">
                                            Learn More
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-theory-purple/0 via-theory-purple/10 to-theory-purple/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-0 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

