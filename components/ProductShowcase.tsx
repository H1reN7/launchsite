"use client";

import { motion } from "framer-motion";
import React from "react";

const products = [
    {
        title: "Global Intelligence Dashboard",
        id: "01",
        description: "Real-time visualization of market liquidity and whale movements. See the battlefield before the first shot is fired.",
        image: "sitepic.1.png",
        color: "from-blue-500/20 to-purple-500/20",
    },
    {
        title: "Deep Signal Analysis",
        id: "02",
        description: "Proprietary algorithms deconstruct every transaction. We separate organic growth from manipulated pumps.",
        image: "sitepic.2.png",
        color: "from-emerald-500/20 to-violet-300/20",
    },
    {
        title: "Token Synergy Mapper",
        id: "03",
        description: "Uncover hidden alliances and coordinated actions like a pro trader, among major players. Stay ahead with unparalleled transparency.",
        image: "sitepic.3.png",
        color: "from-red-300/20 to-black-500/20",
    },
];

export const ProductShowcase = () => {
    return (
        <section className="relative py-32 bg-[#050505]/50 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-8">
                        The <span className="text-blue-500">System</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-serif italic max-w-2xl mx-auto">
                        A detailed look at the tools that give you the unfair advantage.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-24">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 min-h-[50vh]"
                        >
                            {/* Image Section */}
                            <div className={`relative min-h-[300px] md:h-auto p-8 md:p-12 flex items-center justify-center overflow-hidden`}>
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 transition-opacity duration-500`} />

                                <img
                                    src={`/${product.image}`}
                                    alt={product.title}
                                    className="relative w-full h-full object-contain drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-700 block"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12 flex flex-col justify-center bg-black/20 backdrop-blur-md">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-xs font-mono uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full bg-white/5 text-blue-400">
                                        Module {product.id}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight text-white">{product.title}</h3>
                                <p className="text-lg md:text-xl text-gray-400 font-serif leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-32 text-center"
                >
                    <p className="text-2xl md:text-4xl font-serif italic text-white/40 max-w-3xl mx-auto leading-relaxed">
                        The market does not wait. Neither should you.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
