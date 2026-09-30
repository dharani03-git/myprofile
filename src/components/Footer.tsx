"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-10 sm:py-14 border-t border-white/5 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
                    <a href="#home" className="flex items-center group">
                        <img 
                            src="/projects/logo.png?v=2" 
                            alt="Dharani Logo" 
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                        />
                    </a>

                    <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm font-bold text-neutral-400 uppercase tracking-widest">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        <a href="https://github.com/dharani03-git" target="_blank" aria-label="GitHub" className="p-2.5 sm:p-3 glass rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"><Github size={18} /></a>
                        <a href="https://linkedin.com/in/dharanigurusamy" target="_blank" aria-label="LinkedIn" className="p-2.5 sm:p-3 glass rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"><Linkedin size={18} /></a>
                        <a href="mailto:dharaniguru03@gmail.com" aria-label="Email" className="p-2.5 sm:p-3 glass rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"><Mail size={18} /></a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/5 text-center md:text-left">
                    <p className="text-xs sm:text-sm text-neutral-500">
                        © 2026 Dharani G. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 group text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                    >
                        Back to top <ArrowUp size={15} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Subtle Background Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[200px] sm:h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
        </footer>
    );
};
