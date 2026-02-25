"use client";

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

const SystemArchitecture = () => {
    return (
        <section className="py-20 px-4 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Enterprise System Architecture"
                    subtitle="Exhaustive visualization of the multi-tenant microservices ecosystem and gRPC/IoT orchestration."
                    number="04"
                />

                <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/5 overflow-hidden relative">
                    {/* Animated Background Pulse */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-industrial-blue/5 blur-[140px] rounded-full -z-0" />

                    <div className="relative w-full aspect-[16/10] md:aspect-[21/9] z-10">
                        <svg viewBox="0 0 1000 450" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                                <linearGradient id="modernGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>

                            {/* Legacy Stack (Miniaturized) */}
                            <g opacity="0.2">
                                <rect x="10" y="160" width="100" height="150" rx="4" stroke="white" strokeOpacity="0.2" strokeDasharray="3 3" />
                                <text x="60" y="150" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="10" fontFamily="monospace">LEGACY</text>
                            </g>

                            {/* Migration Link */}
                            <path d="M110 235 L160 235" stroke="white" strokeOpacity="0.1" strokeDasharray="4 4" />

                            {/* Modern Cluster Box */}
                            <rect x="180" y="40" width="780" height="370" rx="20" fill="url(#modernGrad)" stroke="#3B82F6" strokeOpacity="0.3" strokeWidth="1" />
                            <text x="570" y="30" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold" fontFamily="monospace" fillOpacity="0.6">PRODUCTION_READY_ECOSYSTEM [v4.6.0]</text>

                            {/* Layer 1: Edge & Auth */}
                            <g>
                                <rect x="200" y="70" width="160" height="60" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3B82F6" />
                                <text x="280" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">AUTH & SSO HUB</text>
                                <text x="280" y="115" textAnchor="middle" fill="#3B82F6" fontSize="9" fontFamily="monospace">OAuth2 / Azure AD</text>
                            </g>

                            <g>
                                <rect x="200" y="160" width="160" height="120" rx="12" fill="rgba(34,211,238,0.05)" stroke="#22D3EE" />
                                <text x="280" y="190" textAnchor="middle" fill="#22D3EE" fontSize="12" fontWeight="bold" fontFamily="monospace">IoT GATEWAY</text>
                                <text x="280" y="215" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="9" fontFamily="monospace">Tuya / MQTT</text>
                            </g>

                            {/* Layer 2: Core Microservices (gRPC Linked) */}
                            <g>
                                {/* gRPC Pipe Box */}
                                <rect x="420" y="70" width="180" height="280" rx="12" fill="rgba(255,255,255,0.02)" stroke="white" strokeOpacity="0.1" />
                                <text x="510" y="375" textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="9" fontFamily="monospace">INTERNAL_gRPC_BUS</text>

                                <rect x="430" y="90" width="160" height="40" rx="4" fill="rgba(167,139,250,0.1)" stroke="#A78BFA" />
                                <text x="510" y="115" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">PROPERTY SERVICE</text>

                                <rect x="430" y="150" width="160" height="40" rx="4" fill="rgba(167,139,250,0.1)" stroke="#A78BFA" />
                                <text x="510" y="175" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">BOOKING ENGINE</text>

                                <rect x="430" y="210" width="160" height="40" rx="4" fill="rgba(52,211,153,0.1)" stroke="#34D399" />
                                <text x="510" y="235" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">PMS CORE HUB</text>

                                <rect x="430" y="270" width="160" height="40" rx="4" fill="rgba(52,211,153,0.1)" stroke="#34D399" />
                                <text x="510" y="295" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">TELEMETRY SVC</text>
                            </g>

                            {/* gRPC Lines */}
                            <path d="M590 110 L620 110 L620 170 L590 170" stroke="#A78BFA" strokeOpacity="0.3" fill="none" />

                            {/* Layer 3: Outbound & Communications */}
                            <g>
                                <rect x="660" y="70" width="160" height="120" rx="12" fill="rgba(245,158,11,0.05)" stroke="#F59E0B" />
                                <text x="740" y="95" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="bold" fontFamily="monospace">NOTIFICATION HUB</text>
                                <text x="700" y="125" textAnchor="start" fill="white" fillOpacity="0.4" fontSize="9" fontFamily="monospace">• TWILIO (SMS)</text>
                                <text x="700" y="145" textAnchor="start" fill="white" fillOpacity="0.4" fontSize="9" fontFamily="monospace">• FCM (PUSH)</text>
                                <text x="700" y="165" textAnchor="start" fill="white" fillOpacity="0.4" fontSize="9" fontFamily="monospace">• NODEMAILER (SMTP)</text>
                            </g>

                            {/* Data Layer */}
                            <g>
                                <circle cx="900" cy="130" r="35" fill="rgba(245,158,11,0.05)" stroke="#F59E0B" />
                                <text x="900" y="135" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="bold" fontFamily="monospace">REDIS</text>

                                <rect x="865" y="200" width="70" height="120" rx="8" fill="rgba(59,130,246,0.05)" stroke="#3B82F6" />
                                <text x="900" y="260" textAnchor="middle" fill="#3B82F6" fontSize="10" fontWeight="bold" fontFamily="monospace">SQL CLUSTER</text>
                                <text x="900" y="280" textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="8" fontFamily="monospace">POSTGRES/MYSQL</text>
                            </g>

                            {/* Flow Animations */}
                            <motion.circle r="3" fill="#A78BFA" filter="url(#glow)"
                                animate={{ cx: [590, 620, 620, 590], cy: [110, 110, 170, 170], opacity: [0, 1, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />

                            <motion.path d="M360 220 L420 235" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="4 4"
                                animate={{ strokeDashoffset: [20, 0] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />

                            <motion.path d="M590 235 L660 130" stroke="#F59E0B" strokeOpacity="0.2" strokeWidth="1"
                                animate={{ opacity: [0.1, 0.4, 0.1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </svg>
                    </div>

                    {/* Technical Specification Badges */}
                    <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { label: 'Latency', value: '14ms', sub: 'gRPC Internal', color: 'text-cyber-cyan' },
                            { label: 'Throughput', value: '50k+', sub: 'MQTT/Sec', color: 'text-cyber-mint' },
                            { label: 'Availability', value: '99.9%', sub: 'Multi-Region', color: 'text-industrial-blue' },
                            { label: 'Security', value: 'SSO/IAM', sub: 'Azure AD Sink', color: 'text-amber-500' },
                            { label: 'Channels', value: 'Hybrid', sub: 'SMS+Push+Email', color: 'text-purple-400' }
                        ].map((spec) => (
                            <div key={spec.label} className="flex flex-col items-center bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <div className={`text-xl md:text-2xl font-bold font-mono ${spec.color} mb-1`}>
                                    {spec.value}
                                </div>
                                <span className="text-[10px] text-white/50 font-bold font-mono tracking-widest uppercase mb-1">{spec.label}</span>
                                <span className="text-[8px] text-white/20 font-mono tracking-wider">{spec.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemArchitecture;
