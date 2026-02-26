"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import ProjectCard from './ProjectCard';
import SectionHeader from './ui/SectionHeader';
import { usePortfolioData } from '@/hooks/usePortfolioData';

const Projects = () => {
    const { projects } = usePortfolioData();
    const controls = useAnimationControls();
    const [isHovered, setIsHovered] = useState(false);

    // Triple the projects for even smoother infinite loop on large screens
    const displayProjects = [...projects, ...projects, ...projects];

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: "-33.333%",
                transition: {
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        };

        if (!isHovered) {
            startAnimation();
        } else {
            controls.stop();
        }
    }, [isHovered, controls]);

    return (
        <section id="projects" className="py-20 px-4 bg-white/[0.02] overflow-hidden">
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <SectionHeader
                    title="Featured Projects"
                    subtitle="Architectural case studies demonstrating scalable solutions and IoT integrations."
                    number="02"
                />

                {/* Status Indicator */}
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 md:mb-0">
                    <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isHovered ? 'bg-amber-400' : 'bg-cyber-mint'} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${isHovered ? 'bg-amber-500' : 'bg-cyber-mint'}`}></span>
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                        {isHovered ? 'Slider Paused' : 'Auto-Orbit Active'}
                    </span>
                </div>
            </div>

            <div
                className="relative cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Edge Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-10" />

                <motion.div
                    animate={controls}
                    className="flex gap-8 w-fit py-4"
                    initial={{ x: 0 }}
                >
                    {displayProjects.map((project, idx) => (
                        <div key={`${project.id}-${idx}`} className="w-[320px] md:w-[450px] shrink-0">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
                    Hover to pause & inspect architectural details
                </p>
            </div>
        </section>
    );
};

export default Projects;
