"use client";

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Technology in Computer Science",
            school: "Dr. Babasaheb Ambedkar Technological University, Lonere",
            period: "2018 - 2021",
            details: "Specialized in Computer Science & Engineering. DBATU University merit holder."
        },
        {
            degree: "Diploma in Computer Engineering",
            school: "MSBTE Board",
            period: "2014 - 2018",
            details: "Foundation in Computer Engineering and Software Fundamentals."
        }
    ];

    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Education"
                    subtitle="Academic foundation in Computer Science and Engineering."
                    number="05"
                />

                <div className="space-y-8">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel p-6 rounded-xl border border-white/5 relative overflow-hidden group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-industrial-blue/10 rounded-lg text-industrial-blue group-hover:scale-110 transition-transform">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display mb-1">{edu.degree}</h3>
                                    <p className="text-industrial-blue font-medium mb-2">{edu.school}</p>
                                    <p className="text-white/40 text-sm font-mono mb-4">{edu.period}</p>
                                    <p className="text-white/60">{edu.details}</p>
                                </div>
                            </div>

                            <Award className="absolute top-4 right-4 text-white/5 group-hover:text-industrial-blue/10 transition-colors" size={48} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
