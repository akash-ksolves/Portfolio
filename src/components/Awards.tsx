"use client";

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { Award, Trophy, Star } from 'lucide-react';
import Image from 'next/image';
import { usePortfolioData } from '@/hooks/usePortfolioData';

const Awards = () => {
    const { awards } = usePortfolioData();

    return (
        <section id="awards" className="py-20 px-4 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Awards & Recognition"
                    subtitle="Industry recognition and organizational excellence awards."
                    number="03"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awards.map((award: any) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="glass-panel group relative overflow-hidden rounded-2xl border border-white/10 hover:border-industrial-blue/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-industrial-blue/5 transition-all duration-300 p-6"
                        >
                            <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-black/40">
                                <Image
                                    src={award.image}
                                    alt={award.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                                />
                                <div className="absolute top-4 right-4 p-2 bg-industrial-blue/20 rounded-full border border-industrial-blue/30 text-industrial-blue">
                                    <Award size={18} />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold font-display group-hover:text-industrial-blue transition-colors leading-tight">
                                        {award.title}
                                    </h3>
                                    <span className="text-xs font-mono text-white/30 whitespace-nowrap">{award.date}</span>
                                </div>

                                <p className="text-industrial-blue text-xs font-mono uppercase tracking-widest font-bold">
                                    {award.issuer}
                                </p>

                                {award.description && (
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {award.description}
                                    </p>
                                )}
                            </div>

                            {/* Glow effect */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-industrial-blue/5 blur-3xl group-hover:bg-industrial-blue/10 transition-colors rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
