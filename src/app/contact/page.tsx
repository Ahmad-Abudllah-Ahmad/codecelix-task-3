"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BlurText from "@/components/BlurText";

export default function ContactPage() {
    return (
        <main className="pt-32 pb-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <ScrollReveal direction="down">
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Contact Us</h2>
                        </ScrollReveal>
                        <BlurText
                            text="Let's build something amazing together."
                            className="text-4xl md:text-5xl font-bold justify-center"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <ScrollReveal direction="right" distance={50}>
                            <div className="space-y-8">
                                <div className="space-y-6 text-left">
                                    <h3 className="text-2xl font-bold">Get in Touch</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Email Us</p>
                                            <p className="font-bold">hello@codecelix.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Call Us</p>
                                            <p className="font-bold">+1 (555) 000-0000</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Visit Us</p>
                                            <p className="font-bold">123 Design Street, Creative City</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="left" distance={50} delay={0.2}>
                            <form className="space-y-6 p-8 rounded-3xl bg-accent/30 border text-left">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider ml-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl bg-background border focus:border-primary outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 rounded-2xl bg-background border focus:border-primary outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider ml-1">Message</label>
                                    <textarea
                                        className="w-full px-6 py-4 rounded-2xl bg-background border focus:border-primary outline-none transition-all min-h-[150px] resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="w-full py-4 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all group"
                                >
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Map Section */}
                <ScrollReveal direction="up" delay={0.4} distance={60}>
                    <div className="mt-24 rounded-[3rem] overflow-hidden bg-accent/30 border h-[500px] relative shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.1197637392434!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647167440000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale contrast-125 transition-all duration-700 hover:grayscale-0"
                        />
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
