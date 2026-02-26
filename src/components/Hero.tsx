"use client";

import { useTypingEffect } from '@/hooks/useTypingEffect';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';

import { usePortfolioData } from '@/hooks/usePortfolioData';

const Hero = () => {
    const { identity, hero } = usePortfolioData();
    const typedText = useTypingEffect(hero.techKeywords);

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-blue/10 border border-industrial-blue/30 text-industrial-blue text-xs font-mono mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-industrial-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-industrial-blue"></span>
                        </span>
                        AVAILABLE FOR NEW PROJECTS
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                        {identity.full_name} <br />
                        <span className="text-white/40">Full Stack</span> Developer
                    </h1>

                    <div className="flex items-center gap-3 font-mono text-industrial-blue text-xl md:text-2xl mb-8">
                        <Terminal size={24} />
                        <span>{typedText}</span>
                        <span className="w-2 h-8 bg-industrial-blue animate-pulse"></span>
                    </div>

                    <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                        High-performance Full Stack Developer with <span className="text-white font-semibold">{identity.experienceYears}</span> of specialized experience in
                        <span className="text-white font-semibold"> Microservices, IoT, and Enterprise Cloud Orchestration</span>.
                        Proven track record in spearheading the modernization of legacy monoliths into resilient, event-driven ecosystems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#projects" className="group bg-industrial-blue text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg hover:shadow-industrial-blue/20">
                            View My Work
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href={hero.resumeUrl}
                            download={hero.resumeFilename}
                            className="glass-panel text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center border border-white/10 hover:border-industrial-blue/50 hover:bg-white/5 hover:scale-[1.02] transition-all gap-2"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Visual Decorations */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-industrial-blue/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyber-cyan/5 blur-[100px] rounded-full -z-10" />
        </section>
    );
};

export default Hero;
