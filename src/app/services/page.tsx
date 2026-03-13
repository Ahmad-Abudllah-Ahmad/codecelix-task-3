"use client";

import { motion } from "framer-motion";
import { Code, Globe, Cpu, Palette, Megaphone, Smartphone, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BlurText from "@/components/BlurText";

const allServices = [
    {
        icon: <Globe className="w-10 h-10" />,
        title: "Web Development",
        desc: "We build fast, responsive, and secure websites using the latest technologies like Next.js, React, and Node.js.",
        features: ["Custom Web Apps", "E-commerce Solutions", "CMS Integration"],
        direction: "right" as const,
    },
    {
        icon: <Smartphone className="w-10 h-10" />,
        title: "Mobile App Development",
        desc: "Create seamless mobile experiences for iOS and Android that engage your users and grow your business.",
        features: ["iOS Development", "Android Development", "Cross-platform Apps"],
        direction: "left" as const,
    },
    {
        icon: <Cpu className="w-10 h-10" />,
        title: "AI & Automation",
        desc: "Leverage the power of AI to automate your business processes and gain valuable insights from your data.",
        features: ["Machine Learning", "Process Automation", "Data Analytics"],
        direction: "right" as const,
    },
    {
        icon: <Palette className="w-10 h-10" />,
        title: "UI/UX Design",
        desc: "Our design team creates beautiful, intuitive interfaces that provide exceptional user experiences.",
        features: ["User Research", "Wireframing", "Prototyping"],
        direction: "left" as const,
    },
    {
        icon: <Megaphone className="w-10 h-10" />,
        title: "Digital Marketing",
        desc: "Reach your audience through data-driven marketing strategies that deliver measurable results.",
        features: ["SEO Optimization", "Content Strategy", "Social Media"],
        direction: "right" as const,
    },
    {
        icon: <Code className="w-10 h-10" />,
        title: "Software Engineering",
        desc: "Custom software solutions tailored to your unique business needs and scalable for the future.",
        features: ["Enterprise Software", "API Development", "Cloud Solutions"],
        direction: "left" as const,
    },
];

export default function ServicesPage() {
    return (
        <main className="pt-32 pb-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <ScrollReveal direction="down">
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Our Services</h2>
                    </ScrollReveal>
                    <BlurText
                        text="Solutions that drive innovation and growth."
                        className="text-4xl md:text-6xl font-bold justify-center"
                    />
                    <ScrollReveal direction="up" delay={0.4}>
                        <p className="text-xl text-muted-foreground font-medium">
                            We offer a wide range of digital services to help your business stay ahead in a rapidly changing world.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allServices.map((service, i) => (
                        <ScrollReveal
                            key={i}
                            direction={service.direction}
                            delay={i * 0.1}
                            distance={60}
                        >
                            <div className="p-10 rounded-[2.5rem] bg-accent/30 border border-border/50 hover:border-primary/30 transition-all hover:bg-accent/50 group h-full flex flex-col justify-between">
                                <div className="space-y-6 text-left">
                                    <div className="w-20 h-20 rounded-[2rem] bg-background border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold">{service.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {service.desc}
                                    </p>
                                    <ul className="space-y-3 pt-4">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider mt-10 group/btn">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    );
}
