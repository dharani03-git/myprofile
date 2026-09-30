"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "AI Engineer Intern",
        company: "Aram Analytics",
        period: "10 Months",
        location: "Tamil Nadu, India",
        achievements: [
            "Built and deployed AI-driven analytics systems for real-world business workflows.",
            "Designed and optimized machine learning automation pipelines using Python and Flowise.",
            "Delivered high-impact projects in climate tech and health AI domains.",
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
        <section id="experience" className="py-20 sm:py-28 md:py-32 bg-black relative overflow-hidden">
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
                        Career Path
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                        Professional <span className="text-neutral-500">Journey</span>
                    </h2>
                </motion.div>

                <div className="space-y-6 sm:space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.2 + idx * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative bg-neutral-900/50 border border-white/5 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[32px] hover:border-white/10 hover:bg-neutral-900 transition-all duration-500"
                        >
                            <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-4 sm:gap-8">
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-neutral-400 font-bold text-xs uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5 sm:gap-2"><Briefcase size={14} /> {exp.company}</span>
                                        <span className="w-1 h-1 rounded-full bg-neutral-700" />
                                        <span className="flex items-center gap-1.5 sm:gap-2"><MapPin size={14} /> {exp.location}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">{exp.role}</h3>
                                    
                                    <ul className="grid gap-2.5 sm:gap-3 pt-2 sm:pt-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-3 sm:gap-4 text-neutral-400 group-hover:text-neutral-200 transition-colors leading-relaxed">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white opacity-25 flex-shrink-0" />
                                                <span className="text-xs sm:text-sm md:text-base">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-shrink-0 self-start">
                                    <div className="px-3.5 sm:px-6 py-1.5 sm:py-2.5 bg-white text-black rounded-lg sm:rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-widest shadow-xl">
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
