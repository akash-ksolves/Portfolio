"use client";

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

import { usePortfolioData } from '@/hooks/usePortfolioData';

const ExperienceTimeline = () => {
    const { experience } = usePortfolioData();

    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Professional Journey"
                    subtitle="Architecting resilient systems with a focus on Event-Driven and Cloud-Native patterns."
                    number="01"
                />

                <div className="space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="industrial-border relative pl-8 pb-4"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-industrial-blue border-4 border-carbon-900 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold font-display">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-industrial-blue font-medium mt-1">
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-white/40 font-mono text-sm">
                                    <Calendar size={16} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-white/70 mb-6 max-w-4xl text-lg italic">
                                "{exp.description}"
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {exp.achievements.map((achievement, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-industrial-blue/30 transition-colors">
                                        <CheckCircle2 size={20} className="text-industrial-blue shrink-0 mt-0.5" />
                                        <span className="text-white/80">{achievement}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-industrial-blue/10 border border-industrial-blue/20 text-industrial-blue text-xs font-mono rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
