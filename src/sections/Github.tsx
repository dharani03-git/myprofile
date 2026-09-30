"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Github, Star, GitBranch, ExternalLink } from "lucide-react";
import Image from "next/image";

const repos = [
    { name: "anomaly-violence-detection", language: "Python", stars: 24, forks: 8, description: "Real-time behavior classification using pose landmarks and MediaPipe." },
    { name: "resono-health", language: "Python", stars: 18, forks: 5, description: "CNN-based respiratory disease detection from synthetic audio data." },
    { name: "climate_new", language: "React", stars: 15, forks: 3, description: "High-performance climate infrastructure platform built with Next.js." },
];

export const GithubSection = () => {
    return (
        <section className="py-16 sm:py-24 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="glass p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[30px] md:rounded-[50px] border-white/10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

                    {/* Profile Card */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center text-center relative z-10">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 1 }}
                            className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 sm:border-8 border-white/10 mb-4 sm:mb-6 p-1 glass"
                        >
                            <Image
                                src="/dharani.png"
                                alt="GitHub Profile"
                                width={160}
                                height={160}
                                className="w-full h-full rounded-full object-cover object-[center_15%]"
                            />
                        </motion.div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-3 flex items-center justify-center gap-2 sm:gap-3 text-white">
                            @dharani03-git <Github size={24} className="sm:w-7 sm:h-7" />
                        </h2>
                        <p className="text-sm sm:text-base text-neutral-400 mb-6 sm:mb-8 font-medium max-w-sm">
                            AI Engineer Intern | Full-Stack Developer | Building with ML & Modern Web Apps.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="https://github.com/dharani03-git"
                            target="_blank"
                            className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-bold text-xs sm:text-sm w-full sm:w-auto"
                        >
                            View All Repos <ExternalLink size={16} />
                        </motion.a>
                    </div>

                    {/* Repositories */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 gap-4 sm:gap-6 relative z-10">
                        {repos.map((repo, idx) => (
                            <motion.a
                                key={repo.name}
                                href={`https://github.com/dharani03-git/${repo.name}`}
                                target="_blank"
                                variants={fadeIn("left", idx * 0.1)}
                                whileHover={{ x: 6, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                                className="p-4 sm:p-6 md:p-8 glass rounded-2xl sm:rounded-3xl border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 transition-all group"
                            >
                                <div className="flex-grow">
                                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 text-white group-hover:text-neutral-300 transition-colors break-all sm:break-normal">
                                        {repo.name}
                                    </h3>
                                    <p className="text-neutral-400 font-normal sm:font-medium text-xs sm:text-sm">
                                        {repo.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                                    <span className="flex items-center gap-1.5 text-white font-bold text-xs sm:text-sm">
                                        <Star size={15} /> {repo.stars}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-white font-bold text-xs sm:text-sm">
                                        <GitBranch size={15} /> {repo.forks}
                                    </span>
                                    <span className="px-2.5 py-1 rounded-md sm:rounded-lg bg-white/10 border border-white/10 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white">
                                        {repo.language}
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
