"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Starfield } from "@/components/Starfield";

const keywords = [
    "AI Engineering",
    "Full-Stack Development",
    "AI Automation",
    "Machine Learning",
    "Data-Driven Applications"
];

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 80]);
    const opacity = useTransform(scrollY, [0, 350], [1, 0]);
    const scale = useTransform(scrollY, [0, 350], [1, 0.96]);

    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black selection:bg-white selection:text-black pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24">
            <Starfield count={80} />
            
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.05]" />
            
            {/* Massive Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] md:w-[1000px] h-[340px] sm:h-[650px] md:h-[1000px] bg-white/[0.02] rounded-full blur-[100px] sm:blur-[180px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full flex-grow flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: y1, opacity, scale }}
                    className="flex flex-col items-center text-center w-full my-auto"
                >
                    {/* Availability Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/10 mb-6 sm:mb-8 bg-white/[0.03] shadow-lg"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[11px] font-bold text-neutral-300 uppercase tracking-widest">
                            Open to Hybrid / On-Site Opportunities
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="flex flex-col gap-1 sm:gap-2 mb-6 sm:mb-8 md:mb-10 w-full">
                        <span className="text-xs sm:text-sm md:text-base font-black tracking-[0.3em] uppercase text-neutral-400 mb-1">
                            Dharani Gurusamy
                        </span>
                        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] uppercase">
                            AI ENGINEER <span className="text-neutral-600 font-light hidden sm:inline">|</span>
                        </span>
                        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-400 leading-[1.1] uppercase">
                            FULL-STACK DEVELOPER <span className="text-neutral-600 font-light hidden sm:inline">|</span>
                        </span>
                        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] uppercase">
                            AI AUTOMATION
                        </span>
                    </h1>

                    {/* Supporting Text */}
                    <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 font-normal leading-relaxed mb-6 sm:mb-8 px-2">
                        Building AI-powered applications, automation workflows, data-driven systems, and modern web experiences for real-world business requirements.
                    </p>

                    {/* Supporting Keywords Pill Cluster */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mb-8 sm:mb-12">
                        {keywords.map((kw, i) => (
                            <span
                                key={i}
                                className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 hover:text-white hover:border-white/25 transition-all"
                            >
                                {kw}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons & Socials */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="#projects"
                            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black rounded-2xl font-black text-sm sm:text-base tracking-tight hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-all flex items-center justify-center gap-2"
                        >
                            Explore Projects <ArrowRight size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="#contact"
                            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 glass text-white rounded-2xl font-bold text-sm sm:text-base tracking-tight hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center"
                        >
                            Get in Touch
                        </motion.a>
                        
                        <div className="flex items-center justify-center gap-5 sm:gap-6 pt-2 sm:pt-0 sm:ml-4">
                            {[
                                { icon: Github, href: "https://github.com/dharani03-git", label: "GitHub" },
                                { icon: Linkedin, href: "https://linkedin.com/in/dharanigurusamy", label: "LinkedIn" },
                                { icon: Mail, href: "mailto:dharaniguru03@gmail.com", label: "Email" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    aria-label={social.label}
                                    whileHover={{ y: -3, color: "#fff" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-neutral-400 hover:text-white transition-colors p-2"
                                >
                                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="hidden md:flex absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 pointer-events-none"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">Scroll Down</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-neutral-700 to-transparent" />
            </motion.div>
        </section>
    );
};
