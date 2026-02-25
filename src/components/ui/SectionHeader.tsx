"use client";

import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    number?: string;
}

const SectionHeader = ({ title, subtitle, number }: SectionHeaderProps) => {
    return (
        <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-4">
                {number && (
                    <span className="font-mono text-industrial-blue/50 text-sm">{number}</span>
                )}
                <div className="h-px w-12 bg-industrial-blue/30" />
            </div>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/50 text-lg max-w-2xl"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeader;
