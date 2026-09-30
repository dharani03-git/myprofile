"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { ExternalLink, Github, Monitor, Layers, Cpu } from "lucide-react";

const projects = [
    {
        title: "Violence Anomaly Detection",
        description: "Real-time system classifying behavior as Normal/Violence using pose landmarks with automated email alerts. Built with MediaPipe and Random Forest.",
        tech: ["Python", "MediaPipe", "OpenCV", "Streamlit", "SMTP"],
        github: "https://github.com/dharani03-git/anomaly-violence-detection",
        demo: "https://github.com/dharani03-git/anomaly-violence-detection",
        image: "/projects/violence-detection.png",
    },
    {
        title: "ResonoHack AI Screening",
        description: "Spectrogram-based CNN pipeline for respiratory disease detection using synthetic audio datasets. Focused on healthcare AI automation.",
        tech: ["Python", "CNN", "Audio Processing", "Deep Learning"],
        github: "https://github.com/dharani03-git/resono-health",
        demo: "https://github.com/dharani03-git/resono-health",
        image: "/projects/medical-ai.png",
    },
    {
        title: "Nexus Climate Ecosystem",
        description: "Climate infrastructure advisory site with VCF sections for EV, Solar, Wind & Water. High-performance responsive platform.",
        tech: ["React", "JavaScript", "CSS", "Vercel"],
        github: "https://github.com/dharani03-git/climate_new",
        demo: "https://github.com/dharani03-git/climate_new",
        image: "/projects/climate-tech.png",
    },
    {
        title: "E-Commerce Luxury Portal",
        description: "Fashion e-commerce store with custom theme, product pages, and optimized cart/checkout flow. Built for seamless shopping experience.",
        tech: ["Shopify", "Liquid", "HTML", "CSS"],
        github: "https://github.com/dharani03-git",
        demo: "https://github.com/dharani03-git",
        image: "/projects/luxury-ecommerce.png",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 sm:py-28 md:py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.03]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col mb-12 sm:mb-16 md:mb-24"
                >
                    <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
                        <span className="w-8 sm:w-12 h-[1px] bg-neutral-800" /> 
                        Engineering Showcase
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                        Featured <span className="text-neutral-500">Creations</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", idx * 0.1)}
                            className="group relative bg-white/[0.02] rounded-2xl sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/5 flex flex-col hover:border-white/10 transition-all duration-700"
                        >
                            {/* Project Image Container */}
                            <div className="relative h-52 sm:h-72 md:h-80 overflow-hidden bg-neutral-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                                />
                                {/* Overlay on Hover (Desktop) */}
                                <div className="hidden sm:flex absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4 md:gap-6 backdrop-blur-md">
                                    <motion.a 
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.github} 
                                        target="_blank"
                                        className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center gap-2 font-black text-xs md:text-sm transition-all"
                                    >
                                        <Github size={16} /> Code
                                    </motion.a>
                                    <motion.a 
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.demo} 
                                        target="_blank"
                                        className="bg-neutral-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center gap-2 font-black text-xs md:text-sm transition-all border border-white/10"
                                    >
                                        <ExternalLink size={16} /> Demo
                                    </motion.a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-5 sm:p-8 md:p-12 flex flex-col flex-grow bg-gradient-to-b from-white/[0.03] to-transparent">
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors border border-white/5 flex-shrink-0">
                                        {idx % 2 === 0 ? <Cpu size={20} /> : <Layers size={20} />}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-neutral-400 mb-6 sm:mb-8 leading-relaxed flex-grow text-sm sm:text-base md:text-lg">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-0">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-white/5 text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-neutral-400 border border-white/5 group-hover:border-white/20 group-hover:text-white transition-all"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Direct action buttons for mobile touch devices */}
                                <div className="flex sm:hidden items-center gap-3 pt-4 border-t border-white/5 mt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex-1 py-2.5 bg-white text-black rounded-xl flex items-center justify-center gap-2 font-bold text-xs"
                                    >
                                        <Github size={14} /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="flex-1 py-2.5 bg-white/10 text-white rounded-xl flex items-center justify-center gap-2 font-bold text-xs border border-white/10"
                                    >
                                        <ExternalLink size={14} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-12 sm:mt-16 md:mt-24 text-center"
                >
                    <a 
                        href="https://github.com/dharani03-git" 
                        target="_blank"
                        className="inline-flex items-center justify-center gap-3 sm:gap-4 border border-white/10 px-6 sm:px-12 py-3.5 sm:py-5 rounded-xl sm:rounded-[24px] font-black text-sm sm:text-lg text-white hover:bg-white hover:text-black transition-all w-full sm:w-auto"
                    >
                        Explore More Repositories <Github size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
