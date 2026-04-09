"use client";

import { motion } from "framer-motion";

export default function Drone() {
    return (
        <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center justify-start absolute top-0 left-1/2 -translate-x-1/2 w-40 z-10 pointer-events-none"
        >
            {/* The Drone structure */}
            <div className="relative w-32 h-16 flex items-center justify-center">
                {/* Horizontal Arms */}
                <div className="absolute top-[26px] left-2 right-2 h-[2px] bg-theory-gray" />
                
                {/* Left Rotor */}
                <div className="absolute top-[18px] left-0 w-12 h-3 rounded-[50%] border-[2px] border-theory-purple/30 overflow-hidden transform -skew-x-[15deg] shadow-[0_0_10px_var(--tw-colors-theory-purple)]">
                    <motion.div 
                        animate={{ x: ["-100%", "100%"] }} 
                        transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
                        className="w-[150%] h-full bg-gradient-to-r from-transparent via-theory-bright-purple to-transparent opacity-90" 
                    />
                </div>
                
                {/* Right Rotor */}
                <div className="absolute top-[18px] right-0 w-12 h-3 rounded-[50%] border-[2px] border-theory-purple/30 overflow-hidden transform skew-x-[15deg] shadow-[0_0_10px_var(--tw-colors-theory-purple)]">
                    <motion.div 
                        animate={{ x: ["100%", "-100%"] }} 
                        transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
                        className="w-[150%] h-full bg-gradient-to-r from-transparent via-theory-bright-purple to-transparent opacity-90" 
                    />
                </div>

                {/* Drone Body core */}
                <div className="absolute top-[22px] w-14 h-8 bg-carbon-black border-2 border-theory-purple rounded-b-xl rounded-t-md flex flex-col items-center justify-start overflow-hidden shadow-lg">
                    {/* Glowing eye scanner */}
                    <div className="w-8 h-[6px] bg-theory-gray/50 mt-1 rounded-full flex items-center justify-center overflow-hidden relative">
                        <motion.div 
                            animate={{ x: ["-15px", "15px", "-15px"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-3 h-full bg-theory-bright-purple shadow-[0_0_8px_var(--tw-colors-theory-bright-purple)] absolute"
                        />
                    </div>
                </div>

                {/* Struts connecting arms to rotors */}
                <div className="absolute top-[20px] left-6 w-[2px] h-[6px] bg-theory-gray" />
                <div className="absolute top-[20px] right-6 w-[2px] h-[6px] bg-theory-gray" />
            </div>

            {/* Glowing Tether Line down to the card */}
            <div className="w-[2px] h-12 bg-gradient-to-b from-theory-bright-purple to-theory-purple/20 -mt-2 animate-pulse" />
            
            {/* Attach point visual on the card border */}
            <div className="w-8 h-[2px] bg-theory-bright-purple/60 rounded-full blur-[1px] shadow-[0_0_10px_var(--tw-colors-theory-bright-purple)]" />
        </motion.div>
    );
}
