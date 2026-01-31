"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { X, ArrowRight, Check } from "lucide-react";

interface RequestAccessProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RequestAccessModal = ({ isOpen, onClose }: RequestAccessProps) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: "", email: "", goal: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xvzrjqgg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    objective: formData.goal,
                    _subject: `New Access Request from ${formData.name}`,
                }),
            });

            if (response.ok) {
                setStep(3); // Success
            } else {
                alert("Something went wrong. Please try again or contact us directly at alekrypt@gmail.com");
            }
        } catch (error) {
            alert("Network error. Please try again or contact us directly at alekrypt@gmail.com");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetAndClose = () => {
        setStep(1);
        setFormData({ name: "", email: "", goal: "" });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        className="fixed inset-0 md:inset-x-[20%] md:inset-y-[10%] z-[70] pointer-events-none flex items-center justify-center p-4"
                    >
                        <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative pointer-events-auto">
                            <button
                                onClick={resetAndClose}
                                className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-12 h-full flex flex-col justify-center">
                                {step === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                                        className="space-y-8"
                                    >
                                        <div>
                                            <h2 className="text-4xl font-bold uppercase mb-2">Identify Yourself</h2>
                                            <p className="text-gray-400 font-serif italic text-lg">Who is entering the system?</p>
                                        </div>
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Codename / Name"
                                                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xl focus:outline-none focus:border-blue-500 transition-colors"
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                            <input
                                                type="email"
                                                placeholder="Secure Email"
                                                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xl focus:outline-none focus:border-blue-500 transition-colors"
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <button
                                            onClick={() => setStep(2)}
                                            className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-colors flex justify-center items-center gap-2"
                                        >
                                            Next Step <ArrowRight size={18} />
                                        </button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                                        className="space-y-8"
                                    >
                                        <div>
                                            <h2 className="text-4xl font-bold uppercase mb-2">Your Objective</h2>
                                            <p className="text-gray-400 font-serif italic text-lg">What are you looking for?</p>
                                        </div>
                                        <div className="space-y-4">
                                            <select
                                                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xl focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                                                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                            >
                                                <option value="" disabled selected>Select Primary Objective</option>
                                                <option value="whale">Whale Tracking</option>
                                                <option value="pump">Early Pump Detection</option>
                                                <option value="api">API Access</option>
                                                <option value="institutional">Institutional Integration</option>
                                            </select>
                                        </div>
                                        <button
                                            onClick={handleFormSubmit}
                                            disabled={!formData.goal || isSubmitting}
                                            className="w-full py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? "Submitting..." : "Request Access"}
                                        </button>
                                        <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-white uppercase tracking-widest mt-4">Back</button>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                        className="text-center space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500 mb-4">
                                            <Check size={40} />
                                        </div>
                                        <h2 className="text-4xl font-bold uppercase">Request Received</h2>
                                        <p className="text-xl text-gray-400 font-serif">
                                            Your transmission has been logged. <br />
                                            We will contact you via secure channel if you are selected.
                                        </p>
                                        <button
                                            onClick={resetAndClose}
                                            className="mt-8 px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 uppercase tracking-widest text-sm"
                                        >
                                            Close Transmission
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
