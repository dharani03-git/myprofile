"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[100] px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none flex justify-center">
                <motion.nav
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={cn(
                        "w-full max-w-5xl flex items-center justify-between rounded-full border transition-all duration-300 pointer-events-auto",
                        scrolled
                            ? "px-4 py-2 sm:px-6 sm:py-2.5 bg-black/85 backdrop-blur-2xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                            : "px-4 py-2 sm:px-6 sm:py-3 bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                    )}
                >
                    {/* Brand Logo */}
                    <div className="flex items-center">
                        <a href="#home" className="flex items-center group">
                            <img
                                src="/projects/logo.png?v=2"
                                alt="Dharani Logo"
                                className="h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-3 lg:px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="h-4 w-[1px] bg-neutral-800 mx-2 lg:mx-3" />

                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-1 sm:gap-2 md:hidden">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 text-neutral-300 hover:text-white transition-colors rounded-full"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-neutral-300 hover:text-white transition-colors rounded-full focus:outline-none"
                            aria-label={isOpen ? "Close Menu" : "Open Navigation Menu"}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </motion.nav>
            </header>

            {/* Mobile Fullscreen Drawer Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[110] bg-black/95 flex flex-col justify-between p-6 sm:p-8 pointer-events-auto md:hidden"
                    >
                        {/* Top bar inside drawer */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <img
                                src="/projects/logo.png?v=2"
                                alt="Dharani Logo"
                                className="h-8 w-auto object-contain"
                            />
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-2 text-neutral-400 hover:text-white transition-colors rounded-full"
                                    aria-label="Toggle Theme"
                                >
                                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full"
                                    aria-label="Close Navigation Menu"
                                >
                                    <X size={22} />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col items-start justify-center gap-5 sm:gap-6 py-8 overflow-y-auto">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 + 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-300 hover:text-white transition-colors flex items-center justify-between w-full group"
                                >
                                    <span>{link.name}</span>
                                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-neutral-400" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Footer in Drawer */}
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-500 font-bold uppercase tracking-widest">
                            <span>Dharani Portfolio</span>
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="text-white underline decoration-white/30 underline-offset-4"
                            >
                                Get in touch
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
