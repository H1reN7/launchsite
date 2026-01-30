"use client";

import { motion } from "framer-motion";
import React from "react";
import { GlassCard } from "./GlassCard";

const images = [
    "/sitepic.1.png",
    "/sitepic.2.png",
    "/sitepic.3.png",
];

export const ShowcaseGrid = () => {
    return (
        <section className="relative py-24 px-6 z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        Interface Intelligence
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Experience the clarity of the Alekrypt dashboard.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((img, i) => (
                        <GlassCard key={i} className="aspect-[9/16] md:aspect-auto md:h-[600px] border-white/5 bg-white/5">
                            <motion.img
                                initial={{ scale: 1.1, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                src={img}
                                alt={`Interface Showcase ${i + 1}`}
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
