"use client";

import { motion } from "framer-motion";
import React from "react";

export const LiquidBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020202]">
            {/* Deep Atmosphere Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#090515] to-[#1a0b2e]" />

            {/* Layer 1: Distant Mountain/Wave (Purple) */}
            <motion.div
                animate={{
                    x: ["-20%", "0%", "-20%"],
                    skewY: [0, 2, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-10%] -left-[10%] w-[120vw] h-[50vh] bg-[#3b0d5c] rounded-[100%] blur-[80px] opacity-40 mix-blend-screen"
            />

            {/* Layer 2: Mid Wave (Blue) */}
            <motion.div
                animate={{
                    x: ["0%", "-20%", "0%"],
                    scaleY: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-20%] -right-[10%] w-[120vw] h-[60vh] bg-[#0f246e] rounded-[100%] blur-[90px] opacity-50 mix-blend-screen"
            />

            {/* Layer 3: Foreground Mist (Cyan/Teal) */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    x: ["-10%", "10%", "-10%"],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-30%] left-[20%] w-[80vw] h-[40vh] bg-[#004d40] rounded-[100%] blur-[100px] opacity-30 mix-blend-screen"
            />

            {/* Noise Texture Overlay for grain/texture */}
            <div className="absolute inset-0 bg-transparent opacity-10 pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")', filter: 'contrast(300%) brightness(100%) grayscale(100%)' }}
            />
        </div>
    );
};
