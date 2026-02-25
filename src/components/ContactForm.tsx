"use client";

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { useState } from 'react';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // Replace with actual Google Apps Script Web App URL for 100% cost-free backend
            // await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', { method: 'POST', body: JSON.stringify(data) });
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate transmission
            setSubmitted(true);
        } catch (error) {
            console.error("Transmission Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Connect with Me"
                    subtitle="Interested in building high-performance systems together? Let's talk."
                    number="06"
                />

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold font-display mb-8">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-industrial-blue/50 transition-colors">
                                    <Mail className="text-industrial-blue" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase font-mono mb-1">Email</p>
                                    <a href="mailto:akashkharat1212@gmail.com" className="text-lg font-medium hover:text-industrial-blue transition-colors">
                                        akashkharat1212@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-industrial-blue/50 transition-colors">
                                    <Phone className="text-industrial-blue" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase font-mono mb-1">Phone</p>
                                    <a href="tel:+917083917887" className="text-lg font-medium hover:text-industrial-blue transition-colors">
                                        +91 7083917887
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-industrial-blue/50 transition-colors">
                                    <MapPin className="text-industrial-blue" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase font-mono mb-1">Location</p>
                                    <p className="text-lg font-medium">Pune, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel p-8 rounded-2xl border border-white/10"
                    >
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-cyber-mint/20 text-cyber-mint rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Payload Transmitted</h3>
                                <p className="text-white/50">Response expected within 24 standard cycles.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-industrial-blue hover:underline font-mono text-xs uppercase"
                                >
                                    Transmit New Payload
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/50 text-xs uppercase font-mono mb-2">Name</label>
                                        <input
                                            name="name"
                                            required
                                            type="text"
                                            placeholder="Akash Kharat"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-industrial-blue transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white/50 text-xs uppercase font-mono mb-2">Email</label>
                                        <input
                                            name="email"
                                            required
                                            type="email"
                                            placeholder="akash@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-industrial-blue transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-white/50 text-xs uppercase font-mono mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Outline your architectural requirements..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-industrial-blue transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-industrial-blue text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg hover:shadow-industrial-blue/20 disabled:opacity-50"
                                >
                                    {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                                    <Send size={18} />
                                </button>
                                <p className="text-center text-[10px] text-white/20 font-mono mt-4">
                                    SECURE CLOUD TRANSMISSION PROTOCOL ACTIVE
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
