"use client";

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { Cpu, Globe, Database, Layers } from 'lucide-react';

import { usePortfolioData } from '@/hooks/usePortfolioData';

const SkillsMatrix = () => {
    const { skills } = usePortfolioData();

    const getIcon = (iconName: string, colorClass: string) => {
        switch (iconName) {
            case 'Layers': return <Layers className={colorClass} />;
            case 'Cpu': return <Cpu className={colorClass} />;
            case 'Globe': return <Globe className={colorClass} />;
            case 'Database': return <Database className={colorClass} />;
            default: return <Layers className={colorClass} />;
        }
    };

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Technical Arsenal"
                    subtitle="Proven expertise across the full-stack, from hardware integration to cloud orchestration."
                    number="03"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((cat: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel p-6 rounded-xl border border-white/5 hover:border-industrial-blue/30 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                                    {getIcon(cat.icon, cat.color)}
                                </div>
                                <h3 className="font-bold text-lg leading-tight">{cat.name}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill: any) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-black/40 border border-white/10 rounded font-mono text-xs text-white/70 hover:text-white hover:border-industrial-blue/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Hex background decoration */}
                            <div className="absolute top-2 right-2 opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsMatrix;
