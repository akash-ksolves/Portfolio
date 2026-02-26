"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Cpu, Layout, Server, Database, Code, Lightbulb, Thermometer, Lock } from 'lucide-react';

interface ProjectCardProps {
    project: {
        title: string;
        challenge: string;
        solution: string;
        win: string;
        tech: string[];
        type: string;
        hasDemo?: boolean;
        snippet?: string;
    };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [isDemoActive, setIsDemoActive] = useState(false);
    const [demoState, setDemoState] = useState({ lights: false, hvac: 22, lock: true });
    const [showSnippet, setShowSnippet] = useState(false);

    const getIcon = (type: string) => {
        const t = type.toLowerCase();
        if (t.includes('iot')) return <Cpu className="text-cyber-cyan" size={20} />;
        if (t.includes('saas') || t.includes('crm')) return <Layout className="text-industrial-blue" size={20} />;
        if (t.includes('logistics') || t.includes('integration')) return <Server className="text-cyber-mint" size={20} />;
        return <Database size={20} />;
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel group relative overflow-hidden flex flex-col h-full rounded-xl border border-white/10 hover:border-industrial-blue/50 transition-all duration-300"
        >
            <div className="p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        {getIcon(project.type)}
                        <span className="text-xs font-mono uppercase tracking-wider text-white/50">{project.type}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="https://github.com/A2K12" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" title="View Code">
                            <Github size={18} />
                        </a>
                        {project.snippet && (
                            <Code
                                size={18}
                                className={`cursor-pointer transition-colors ${showSnippet ? 'text-industrial-blue' : 'text-white/40 hover:text-white'}`}
                                onClick={() => setShowSnippet(!showSnippet)}
                            />
                        )}
                        <a href="https://linkedin.com/in/akash-kharat-58949a135" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" title="Live Demo">
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-industrial-blue transition-colors">
                    {project.title}
                </h3>

                <AnimatePresence mode="wait">
                    {showSnippet ? (
                        <motion.div
                            key="snippet"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-6 flex-grow"
                        >
                            <div className="bg-black/60 rounded-lg p-4 font-mono text-[11px] overflow-x-auto border border-industrial-blue/20">
                                <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                                    <span className="text-industrial-blue uppercase">nestjs_controller.ts</span>
                                    <span className="text-white/20">Read-Only</span>
                                </div>
                                <pre className="text-blue-100/80">
                                    <code>{project.snippet}</code>
                                </pre>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4 flex-grow mb-6 text-sm"
                        >
                            <div>
                                <span className="text-industrial-blue font-mono text-[10px] uppercase block mb-1">Challenge</span>
                                <p className="text-white/60 leading-relaxed">{project.challenge}</p>
                            </div>
                            <div>
                                <span className="text-cyber-cyan font-mono text-[10px] uppercase block mb-1 text-cyan-400">Architectural Solution</span>
                                <p className="text-white/80 leading-relaxed">{project.solution}</p>
                            </div>
                            <div className="bg-industrial-blue/5 p-3 rounded border border-industrial-blue/10">
                                <span className="text-industrial-blue font-mono text-[10px] uppercase block mb-1">Optimization Win</span>
                                <p className="text-blue-200/90 font-medium">{project.win}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* IoT Demo Toggle or Modern Metrics */}
                {project.hasDemo ? (
                    <div className="mb-6">
                        <button
                            onClick={() => setIsDemoActive(!isDemoActive)}
                            className="w-full py-2 bg-industrial-blue/10 border border-industrial-blue/30 rounded-lg text-xs font-mono text-industrial-blue hover:bg-industrial-blue hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            <Cpu size={14} />
                            {isDemoActive ? "EXIT VIRTUAL ROOM" : "ENTER VIRTUAL ROOM CONTROL"}
                        </button>
                    </div>
                ) : (
                    <div className="mb-6 bg-black/40 rounded-lg p-4 border border-white/5 font-mono">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                            <span className="text-white/40 text-[10px] uppercase tracking-tighter">System Reliability Ops</span>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyber-mint animate-pulse" />
                                <span className="text-cyber-mint text-[9px] font-bold">STABLE</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {[
                                { label: 'Uptime', val: '99.9%', color: 'bg-cyber-mint' },
                                { label: 'Availability', val: 'High', color: 'bg-industrial-blue' },
                                { label: 'Query Latency', val: '< 50ms', color: 'bg-cyber-cyan' },
                            ].map((m) => (
                                <div key={m.label} className="group/metric">
                                    <div className="flex justify-between text-[9px] mb-1">
                                        <span className="text-white/30">{m.label}</span>
                                        <span className="text-white/60 font-bold">{m.val}</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className={`h-full ${m.color} opacity-30 group-hover/metric:opacity-60 transition-opacity`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* IoT Dashboard / Virtual Room Control */}
                {isDemoActive && project.hasDemo && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 bg-black/60 rounded-xl p-4 border border-industrial-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    >
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                            <span className="text-white font-mono text-xs uppercase">MQTT Simulator</span>
                            <div className="flex items-center gap-1.5 animate-pulse">
                                <span className="w-2 h-2 rounded-full bg-cyber-mint shadow-[0_0_8px_#34D399]" />
                                <span className="text-cyber-mint text-[10px] font-bold">TUNNEL ACTIVE</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setDemoState(s => ({ ...s, lights: !s.lights }))}
                                className={`p-3 rounded-lg border transition-all flex flex-col items-center gap-2 ${demoState.lights ? 'bg-amber-500/20 border-amber-500/50 text-amber-500' : 'bg-white/5 border-white/10 text-white/40'}`}
                            >
                                <Lightbulb size={20} className={demoState.lights ? 'animate-pulse' : ''} />
                                <span className="text-[10px] font-bold">LIGHTS</span>
                            </button>
                            <button
                                onClick={() => setDemoState(s => ({ ...s, lock: !s.lock }))}
                                className={`p-3 rounded-lg border transition-all flex flex-col items-center gap-2 ${!demoState.lock ? 'bg-industrial-blue/20 border-industrial-blue/50 text-industrial-blue' : 'bg-white/5 border-white/10 text-white/40'}`}
                            >
                                <Lock size={20} />
                                <span className="text-[10px] font-bold uppercase">{demoState.lock ? 'Locked' : 'Unlocked'}</span>
                            </button>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] text-white/40 uppercase font-mono">HVAC Temp</span>
                                <span className="text-cyber-cyan font-mono text-xs">{demoState.hvac}°C</span>
                            </div>
                            <input
                                type="range"
                                min="16" max="30"
                                value={demoState.hvac}
                                onChange={(e) => setDemoState(s => ({ ...s, hvac: parseInt(e.target.value) }))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-industrial-blue"
                            />
                        </div>
                    </motion.div>
                )}

                <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-white/30 hover:text-industrial-blue transition-colors cursor-default">#{t}</span>
                    ))}
                </div>
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-industrial-blue/0 via-industrial-blue/0 to-industrial-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
};

export default ProjectCard;
