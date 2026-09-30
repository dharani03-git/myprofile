"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Linkedin, ExternalLink, ShieldCheck, UserPlus } from "lucide-react";
import Image from "next/image";

export const LinkedinSection = () => {
    return (
        <section className="py-16 sm:py-24 relative bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="glass p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[30px] md:rounded-[50px] border-blue-500/20 flex flex-col items-center text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
                >
                    {/* Animated Background Pulse */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-6 sm:mb-8">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-110 sm:scale-125 animate-pulse" />
                            <Image
                                src="/dharani.png"
                                alt="Profile"
                                width={160}
                                height={160}
                                className="w-full h-full rounded-full border-4 sm:border-8 border-white/5 object-cover object-[center_15%] relative"
                            />
                            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-600 p-1.5 sm:p-2 rounded-full border-2 sm:border-4 border-black text-white">
                                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
                            </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 flex flex-wrap items-center justify-center gap-2 text-white">
                            <span>Dharani G</span>
                            <span className="text-blue-400 font-semibold italic text-sm sm:text-base md:text-lg flex items-center gap-1">
                                (Verified <ShieldCheck size={16} />)
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-xl font-medium text-neutral-300 mb-4 sm:mb-6 max-w-lg">
                            AI Engineer Intern at Aram Analytics | Full-Stack Developer | AI Automation
                        </p>
                        <p className="max-w-xl mx-auto text-neutral-400 mb-8 sm:mb-10 text-xs sm:text-base md:text-lg leading-relaxed">
                            AI Engineer building intelligent systems, automation workflows, and modern web applications.
                            Currently at Aram Analytics — open to strategic collaborations and impactful engineering roles.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
                            <a
                                href="https://www.linkedin.com/in/dharanigurusamy"
                                target="_blank"
                                className="flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xs sm:text-sm transition-all shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 w-full sm:w-auto"
                            >
                                Let's Connect <UserPlus size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dharanigurusamy"
                                target="_blank"
                                className="flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 glass rounded-full font-bold text-xs sm:text-sm text-white border-blue-500/30 hover:bg-white/10 transition-all hover:-translate-y-1 w-full sm:w-auto"
                            >
                                View Profile <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
