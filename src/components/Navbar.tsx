"use client";

import Link from 'next/link';
import { Linkedin, Github, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-display font-bold text-xl tracking-tighter flex items-center gap-2">
                            <span className="text-industrial-blue">AKASH</span>
                            <span className="text-white/50">KHARAT</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/70 hover:text-industrial-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://linkedin.com/in/akash-kharat" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-industrial-blue transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/A2K12" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-industrial-blue transition-colors">
                            <Github size={20} />
                        </a>
                        <Link href="#contact" className="bg-industrial-blue/10 border border-industrial-blue text-industrial-blue px-4 py-1.5 rounded-md text-sm font-medium hover:bg-industrial-blue hover:text-white transition-all">
                            Contact Me
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel border-t border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/70 hover:text-industrial-blue block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center space-x-4 px-3 py-2">
                                <a href="https://linkedin.com/in/akash-kharat" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-industrial-blue">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com/A2K12" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-industrial-blue">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
