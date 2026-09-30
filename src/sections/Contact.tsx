"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Starfield } from "@/components/Starfield";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle, ArrowRight } from "lucide-react";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 2000);
    };

    return (
        <section id="contact" className="py-20 sm:py-28 md:py-32 bg-black relative overflow-hidden">
            <Starfield count={40} />
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.03]" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col mb-12 sm:mb-16 md:mb-24"
                >
                    <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
                        <span className="w-8 sm:w-12 h-[1px] bg-neutral-800" /> 
                        Connection
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                        Let's Talk <span className="text-neutral-500">Innovation</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-10"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-medium leading-relaxed">
                            Open to strategic partnerships, research AI collaborations, and high-impact full-stack engineering roles.
                        </p>

                        <div className="space-y-4 sm:space-y-6">
                            {[
                                { icon: Mail, label: "Direct Email", value: "dharaniguru03@gmail.com", href: "mailto:dharaniguru03@gmail.com" },
                                { icon: Linkedin, label: "LinkedIn Network", value: "Dharani Gurusamy", href: "https://linkedin.com/in/dharanigurusamy" },
                                { icon: Github, label: "GitHub Repositories", value: "dharani03-git", href: "https://github.com/dharani03-git" }
                            ].map((channel, i) => (
                                <a 
                                    key={i}
                                    href={channel.href}
                                    target="_blank"
                                    className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group"
                                >
                                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 text-neutral-400 group-hover:bg-white group-hover:text-black transition-all flex-shrink-0">
                                        <channel.icon size={22} className="sm:w-6 sm:h-6" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-[9px] sm:text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-0.5 sm:mb-1">{channel.label}</h4>
                                        <p className="text-white font-bold text-sm sm:text-base md:text-lg truncate">{channel.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white/[0.02] p-5 sm:p-8 md:p-14 rounded-2xl sm:rounded-[32px] md:rounded-[40px] border border-white/5 relative"
                    >
                        {status === "success" ? (
                            <div className="h-full min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 animate-zoomIn py-8">
                                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10">
                                    <CheckCircle size={36} className="sm:w-12 sm:h-12" />
                                </div>
                                <div className="space-y-2 sm:space-y-4">
                                    <h3 className="text-2xl sm:text-3xl font-black text-white">Transmission Received</h3>
                                    <p className="text-neutral-400 text-sm sm:text-base max-w-sm mx-auto">Thank you for reaching out. I'll get back to you across the frequency shortly.</p>
                                </div>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="flex items-center gap-2 sm:gap-3 text-white font-black uppercase text-[9px] sm:text-[10px] tracking-widest border-b border-white pb-2 hover:border-transparent transition-all"
                                >
                                    Clear Matrix & Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 ml-1">Entity Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-5 focus:outline-none focus:border-white transition-all text-white font-medium text-sm sm:text-base"
                                        />
                                    </div>
                                    <div className="space-y-2 sm:space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 ml-1">Digital Identity</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="name@company.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-5 focus:outline-none focus:border-white transition-all text-white font-medium text-sm sm:text-base"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 sm:space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 ml-1">Project Concept</label>
                                    <textarea
                                        required
                                        placeholder="Briefly outline your vision..."
                                        className="w-full h-32 sm:h-40 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 focus:outline-none focus:border-white transition-all text-white font-medium resize-none text-sm sm:text-base"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full group relative overflow-hidden bg-white text-black py-4 sm:py-5 rounded-xl sm:rounded-[20px] font-black text-sm sm:text-base md:text-lg transition-all active:scale-95 disabled:opacity-50"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                                        {status === "loading" ? "SYNCHRONIZING..." : "INITIATE TRANSMISSION"}
                                        {status !== "loading" && <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />}
                                    </span>
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
