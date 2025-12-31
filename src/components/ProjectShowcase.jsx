import React from 'react';
import { Code, Server, Database, Lock, Layers, Zap, Rocket, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectShowcase = () => {
    const projects = [
        {
            title: "Java Full Stack E-Commerce",
            desc: "A production-ready platform with React frontend, Spring Boot backend, and MySQL database integration.",
            tech: ["React", "Spring Boot", "MySQL", "JWT"],
            category: "Major Project"
        },
        {
            title: "Microservices Banking System",
            desc: "Scalable banking architecture using Spring Cloud, Netflix OSS, and secure transaction handling.",
            tech: ["Microservices", "Docker", "Kafka", "Cloud"],
            category: "Advanced"
        },
        {
            title: "AI-Powered Patient Portal",
            desc: "Healthcare management system with real-time appointment booking and patient history tracking.",
            tech: ["Java", "MongoDB", "Auth0", "REST"],
            category: "Healthcare"
        },
        {
            title: "Distributed Library System",
            desc: "Search-optimized library management system with elastic search and database indexing.",
            tech: ["ElasticSearch", "Core Java", "JPA", "SQL"],
            category: "System Design"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl text-start">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Practical Learning</span>
                        <h2 className="section-title mt-2">What We'll <span className="text-primary">Build Live</span></h2>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            No boring lectures. Watch and learn as we live-code industry-standard Java applications, breaking down complex architectures into simple, understandable minutes.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="bg-white px-6 py-3 rounded-xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2">
                            View Roadmap
                            <Rocket className="w-5 h-5 text-primary" />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-premium transition-all hover:bg-slate-900 hover:text-white"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-blue-300">
                                    {project.category}
                                </span>
                                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-500 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-white">{project.title}</h3>
                            <p className="text-slate-500 mb-8 group-hover:text-slate-400 group-hover:mb-8 leading-relaxed">
                                {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-50 text-slate-500 text-xs font-medium group-hover:bg-white/5 group-hover:text-slate-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
