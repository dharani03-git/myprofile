"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Starfield } from "@/components/Starfield";

import { Brain, Cpu, Database, Binary, Globe, Award, Target, MessageSquare } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-20 sm:py-28 md:py-32 relative overflow-hidden bg-black">
            <Starfield count={60} />
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.03]" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    
                    {/* Visual Section - 5 Columns */}
                    <div className="lg:col-span-5 relative group flex flex-col items-center">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative aspect-square w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none"
                        >
                            {/* The "Core" Visual - Stealth Style */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Orbiting Rings */}
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-white/5 rounded-[50px] sm:rounded-[70px] md:rounded-[80px]"
                                />
                                <motion.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 sm:inset-8 border border-white/[0.03] rounded-[40px] sm:rounded-[60px] md:rounded-[70px] border-dashed"
                                />

                                {/* Floating Cards Matrix */}
                                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 p-2 sm:p-4 w-full h-full relative z-20">
                                    {[
                                        { title: "Computer Vision", icon: Globe },
                                        { title: "Deep Learning", icon: Brain },
                                        { title: "Data Analytics", icon: Database },
                                        { title: "Model Arch", icon: Cpu }
                                    ].map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.02, y: -4 }}
                                            className="glass rounded-2xl sm:rounded-[28px] md:rounded-[32px] p-3.5 sm:p-5 md:p-6 border-white/5 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all hover:border-white/20 hover:bg-white/[0.03] backdrop-blur-xl"
                                        >
                                            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] text-white border border-white/5">
                                                <skill.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors text-center">
                                                {skill.title}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Center Stealth Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 glass rounded-full border-white/10 flex items-center justify-center shadow-2xl">
                                    <Binary className="text-white opacity-25 w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Status Floating Box */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="mt-6 lg:mt-0 lg:absolute lg:-bottom-6 lg:right-0 glass px-5 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl border-white/10 flex items-center gap-3 sm:gap-4 shadow-xl bg-black/60 w-fit"
                        >
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] flex-shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Availability</span>
                                <span className="text-xs sm:text-sm font-black text-white whitespace-nowrap">Open to New Opportunities</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Section - 7 Columns */}
                    <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-12">
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
                                <span className="text-neutral-500 font-black tracking-[0.4em] uppercase text-[10px]">Intellectual DNA</span>
                                <div className="h-[1px] w-8 sm:w-12 bg-neutral-800" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight tracking-tight text-white">
                                Bridging Logic with <br />
                                <span className="text-neutral-500">Intelligent Systems</span>
                            </h2>
                            <div className="space-y-4 sm:space-y-6 text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                                <p>
                                    I am an <span className="text-white font-black underline decoration-white/10 decoration-4 underline-offset-8 transition-colors hover:decoration-white/30">AI Engineer</span> specializing in building intelligent systems that solve complex real-world problems through data and automation.
                                </p>
                                <p>
                                    My work sits at the intersection of <span className="text-white">Machine Learning</span> and <span className="text-white">Full-Stack Engineering</span>. I design AI-powered applications, automation workflows, and data-driven systems — currently at Aram Analytics.
                                </p>
                            </div>
                        </motion.div>

                        {/* Bento Style Metric Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                            {[
                                { val: "AI", label: "Engineering Focus Area", icon: Target },
                                { val: "3+", label: "Projects Shipped", icon: Award },
                                { val: "Fluent", label: "English Communication", icon: MessageSquare }
                            ].map((met, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeIn("up", 0.4 + i * 0.1)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4 }}
                                    className="p-5 sm:p-6 md:p-8 glass rounded-2xl sm:rounded-[32px] border-white/5 hover:border-white/20 transition-all flex flex-col gap-4 sm:gap-6 group bg-white/[0.02]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors border border-white/5">
                                            <met.icon size={18} />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-2xl sm:text-3xl font-black text-white tracking-tighter">{met.val}</div>
                                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-snug">
                                            {met.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
