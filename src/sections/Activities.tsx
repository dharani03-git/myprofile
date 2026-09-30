"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Zap, ChevronRight, GraduationCap, Flame, Target, MapPin, Calendar } from "lucide-react";

const activities = [
    {
        title: "AI Tools & Prompt Engineering",
        subtitle: "Advanced Training Session",
        host: "Aram Analytics",
        date: "Feb 2026",
        image: "/training.jpg",
        tags: ["Claude AI", "Flowise", "Automation"],
        highlights: [
            "Deep dive into context window optimization & reasoning chains.",
            "Live synthesis of complex corporate data into actionable SOPs.",
            "Architected automated workflow pipelines using Flowise & Make.com.",
        ],
        icon: GraduationCap,
        accent: "white"
    },
    {
        title: "Techkoodaram MVP Build Day",
        subtitle: "Founder-Market Fit Sprint",
        host: "Build Day ⚡",
        date: "Q1 2026",
        image: "/build-day.jpg",
        tags: ["Product Design", "Pitching", "Scale"],
        highlights: [
            "Transformed abstract student concepts into market-ready MVPs.",
            "Synthesized radical feedback from industry investors into product pivots.",
            "Led cross-functional teams to build and pitch under extreme time pressure.",
        ],
        icon: Flame,
        accent: "white"
    }
];

export const Activities = () => {
    return (
        <section id="activities" className="py-20 sm:py-28 md:py-32 relative overflow-hidden bg-black">
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
                        Ecosystem & Impact
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                        Innovation <span className="text-neutral-500">Milestones</span>
                    </h2>
                </motion.div>

                <div className="grid gap-12 lg:gap-20">
                    {activities.map((activity, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative"
                        >
                            <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 items-center">
                                {/* Visual Card - Span 7 */}
                                <div className="lg:col-span-7 relative overflow-hidden rounded-2xl sm:rounded-[32px] aspect-[16/10] border border-white/5 bg-neutral-900 group-hover:border-white/20 transition-all duration-700">
                                    <img 
                                        src={activity.image} 
                                        alt={activity.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />
                                    
                                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-wrap gap-1.5 sm:gap-2">
                                        {activity.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 bg-black/60 backdrop-blur-md rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest border border-white/10 text-white/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Sub-label Overlay */}
                                    <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-transform group-hover:-translate-y-1">
                                        <activity.icon size={14} /> {activity.host}
                                    </div>
                                </div>

                                {/* Content Card - Span 5 */}
                                <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:pl-6 xl:pl-10">
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="flex items-center gap-3 sm:gap-4 text-neutral-400 text-xs font-bold uppercase tracking-widest">
                                            <span className="flex items-center gap-1.5 sm:gap-2"><Calendar size={14} /> {activity.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-neutral-700" />
                                            <span className="flex items-center gap-1.5 sm:gap-2"><Target size={14} /> Milestones</span>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                                            {activity.title}
                                        </h3>
                                        <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-medium">
                                            {activity.subtitle}
                                        </p>
                                    </div>

                                    <div className="space-y-2.5 sm:space-y-4">
                                        {activity.highlights.map((point, i) => (
                                            <div 
                                                key={i}
                                                className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 transition-colors group/item"
                                            >
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white opacity-25 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                                                <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed group-hover/item:text-white transition-colors">
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{ x: 6 }}
                                        className="flex items-center gap-3 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] pt-4 border-t border-white/5 w-full group"
                                    >
                                        Case Study Coming Soon 
                                        <ChevronRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* subtle divider line for mobile */}
                            <div className="mt-12 lg:hidden w-full h-[1px] bg-neutral-900" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
