"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import SectionHeader from './ui/SectionHeader';
import { usePortfolioData } from '@/hooks/usePortfolioData';

const Projects = () => {
    const { projects } = usePortfolioData();
    const controls = useAnimationControls();
    const [isHovered, setIsHovered] = useState(false);

    // Triple the projects for smooth infinite loop
    const displayProjects = [...projects, ...projects, ...projects];

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: "-33.333%",
                transition: {
                    duration: 30,
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

    const handleNext = async () => {
        await controls.start({
            x: "-66.666%",
            transition: { duration: 0.8, ease: "easeInOut" }
        });
        controls.set({ x: "0%" });
        if (!isHovered) {
            controls.start({
                x: "-33.333%",
                transition: { duration: 30, ease: "linear", repeat: Infinity }
            });
        }
    };

    const handlePrev = async () => {
        controls.set({ x: "-66.666%" });
        await controls.start({
            x: "-33.333%",
            transition: { duration: 0.8, ease: "easeInOut" }
        });
        if (!isHovered) {
            controls.start({
                x: "-33.333%",
                transition: { duration: 30, ease: "linear", repeat: Infinity }
            });
        }
    };

    return (
        <section id="projects" className="py-20 px-4 bg-white/[0.02] overflow-hidden">
            <div className="max-w-7xl mx-auto mb-12 flex items-center justify-between gap-6">
                <div className="flex-1">
                    <SectionHeader
                        title="Featured Projects"
                        subtitle="Architectural case studies demonstrating scalable solutions and IoT integrations."
                        number="02"
                    />
                </div>

                <div className="flex gap-4 shrink-0">
                    <button
                        onClick={handlePrev}
                        className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-industrial-blue/50 hover:bg-white/10 transition-all text-white/50 hover:text-industrial-blue"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-industrial-blue/50 hover:bg-white/10 transition-all text-white/50 hover:text-industrial-blue"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div
                className="relative cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Edge Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-20" />

                <motion.div
                    animate={controls}
                    className="flex gap-8 w-fit py-4"
                    initial={{ x: "0%" }}
                >
                    {displayProjects.map((project, idx) => (
                        <div key={`${project.id}-${idx}`} className="w-[300px] md:w-[450px] shrink-0 transform hover:scale-[1.02] transition-transform duration-500">
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
