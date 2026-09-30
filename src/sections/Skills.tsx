"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Code2, Brain, Layout, Wrench, UserCircle, Globe } from "lucide-react";

const skills = [
    {
        category: "AI & Machine Learning",
        icon: <Brain className="text-white" size={32} />,
        items: ["Machine Learning", "Deep Learning", "CNN", "Computer Vision", "MediaPipe", "OpenCV", "Scikit-Learn", "Audio Processing"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "AI Automation & Agents",
        icon: <Globe className="text-white" size={32} />,
        items: ["Claude AI", "Flowise", "n8n", "Make.com", "LangChain", "Prompt Engineering", "Workflow Automation"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "Frontend Development",
        icon: <Layout className="text-white" size={32} />,
        items: ["React", "Next.js", "JavaScript", "HTML/CSS", "Bootstrap", "Framer Motion", "Shopify"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "Backend & Programming",
        icon: <Code2 className="text-white" size={32} />,
        items: ["Python", "FastAPI", "JavaScript", "PostgreSQL", "pgAdmin", "Liquid", "REST APIs"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "Tools & DevOps",
        icon: <Wrench className="text-white" size={32} />,
        items: ["Git", "GitHub", "Vercel", "VS Code", "Streamlit", "MS Office"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "Soft Skills",
        icon: <UserCircle className="text-white" size={32} />,
        items: ["Fast Learning", "Problem Solving", "Teamwork", "Adaptability", "Communication"],
        color: "from-white/10 to-white/5",
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 sm:py-28 md:py-32 bg-black relative overflow-hidden">
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
                        Capabilities
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                        Technical <span className="text-neutral-500">Stacks</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", idx * 0.1)}
                            whileHover={{ y: -6 }}
                            className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] md:rounded-[40px] glass border-white/5 relative overflow-hidden group transition-all duration-500 bg-white/[0.02]"
                        >
                            <div className="mb-6 sm:mb-8 md:mb-10 p-3.5 sm:p-4 md:p-5 bg-white/5 rounded-2xl sm:rounded-3xl w-fit group-hover:bg-white/10 transition-colors duration-500 border border-white/5">
                                {React.cloneElement(skill.icon, { size: 26, className: "w-6 h-6 sm:w-7 sm:h-7 text-white" })}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 md:mb-8 tracking-tight text-white">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {skill.items.map((item, i) => (
                                    <span 
                                        key={i}
                                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/60 border border-white/5 hover:text-white hover:border-white/20 transition-all cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
