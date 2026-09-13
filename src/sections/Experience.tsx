"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "AI Engineer Intern",
        company: "Aram Analytics",
        period: "2025 – Present",
        location: "Tamil Nadu, India",
        achievements: [
            "Currently working on AI-driven analytics systems.",
            "Implementing and optimizing machine learning automation pipelines.",
            "Collaborating on high-impact projects in climate tech and health AI.",
        ],
    },
    {
        role: "Web Developer",
        company: "Lintcloud Technologies",
        period: "Previous",
        location: "Remote/Hybrid",
        achievements: [
            "Built responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript.",
            "Handled web application deployment and debugging processes.",
            "Collaborated with design teams to ensure UI/UX consistency.",
        ],
    },
    {
        role: "Industrial Trainee",
        company: "IROHUB Infotech",
        period: "Training",
        location: "Kochi, Kerala",
        achievements: [
            "Gained hands-on exposure to React.js, Flutter, and Python.",
            "Learned real-world version control and collaborative development practices.",
            "Participated in industrial workshops and tech demonstrations.",
        ],
    },
    {
        role: "Banking & Finance Trainee",
        company: "Core Domain Training",
        period: "6 Months",
        location: "Tamil Nadu, India",
        achievements: [
            "Completed 6-month specialized training in banking operations.",
            "Mastered core financial principles and banking software workflows.",
            "Gained deep insights into financial domain requirements.",
        ],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.03]" />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col mb-24"
                >
                    <span className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 mb-4 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-neutral-800" /> 
                        Career Path
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        Professional <span className="text-neutral-500">Journey</span>
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.2 + idx * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative bg-neutral-900/50 border border-white/5 p-8 md:p-12 rounded-[32px] hover:border-white/10 hover:bg-neutral-900 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-neutral-500 font-bold text-xs uppercase tracking-widest">
                                        <span className="flex items-center gap-2"><Briefcase size={14} /> {exp.company}</span>
                                        <span className="w-1 h-1 rounded-full bg-neutral-800" />
                                        <span className="flex items-center gap-2 space-x-2"><MapPin size={14} /> {exp.location}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white">{exp.role}</h3>
                                    
                                    <ul className="grid gap-3 pt-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-4 text-neutral-400 group-hover:text-neutral-200 transition-colors leading-relaxed">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white opacity-20 flex-shrink-0" />
                                                <span className="text-sm md:text-base">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="px-6 py-2.5 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
                                        {exp.period}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
