import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code2, Server, Database, Smartphone, GraduationCap, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Curriculum = () => {
    const [openModule, setOpenModule] = useState(0);

    const modules = [
        {
            title: "00-30 Mins: Java Foundations",
            duration: "The Kick-off",
            icon: <Code2 className="w-5 h-5" />,
            topics: ["Variables & Data Types", "The OOPS Mindset", "Java Runtime Logic", "Live Coding: First App"]
        },
        {
            title: "30-60 Mins: Backend Logic",
            duration: "Deep Dive",
            icon: <Smartphone className="w-5 h-5" />,
            topics: ["Exception Handling Mastery", "Collections Framework", "Logic Building Patterns", "Stream API Hacks"]
        },
        {
            title: "60-90 Mins: Data & Architecture",
            duration: "Industrial Skills",
            icon: <Database className="w-5 h-5" />,
            topics: ["Database Connection Setup", "Schema Design Basics", "Spring Boot Intro", "API Development Cycle"]
        },
        {
            title: "90-120 Mins: Build & Deploy",
            duration: "Final Stretch",
            icon: <Server className="w-5 h-5" />,
            topics: ["Micro-Project Assembly", "Deployment Basics", "Roadmap to Full Stack", "Q&A and Networking"]
        }
    ];

    return (
        <section id="curriculum" className="py-24 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Workshop Live Timeline</span>
                    <h2 className="section-title mt-2">120 Minutes of Intensive Learning</h2>
                    <p className="section-subtitle mx-auto">
                        No fluff, no filler. Just the core skills you need to build production-scale Java applications.
                    </p>
                </div>

                <div className="relative space-y-6">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-100 hidden md:block"></div>

                    {modules.map((module, index) => (
                        <div key={index} className="relative md:pl-16">
                            {/* Roadmap Dot/Icon */}
                            <div className={`absolute left-0 top-0 w-16 h-16 rounded-2xl hidden md:flex items-center justify-center z-20 transition-all duration-300 ${openModule === index ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-110' : 'bg-slate-50 text-slate-400'
                                }`}>
                                {module.icon}
                            </div>

                            <div className={`modern-card overflow-hidden ${openModule === index ? 'ring-2 ring-primary/20' : ''}`}>
                                <button
                                    onClick={() => setOpenModule(openModule === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-primary uppercase tracking-tighter">{module.duration}</span>
                                        </div>
                                        <h3 className={`text-xl font-bold ${openModule === index ? 'text-primary' : 'text-slate-900'}`}>{module.title}</h3>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openModule === index ? 'bg-primary/10' : 'bg-slate-50'}`}>
                                        {openModule === index ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openModule === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-8 pt-0 border-t border-slate-50 bg-slate-50/30">
                                                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                                                    {module.topics.map((topic, i) => (
                                                        <div key={i} className="flex items-start gap-3">
                                                            <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                                            </div>
                                                            <span className="text-slate-600 text-sm font-medium leading-relaxed">{topic}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <div className="bg-slate-900 rounded-3xl p-10 relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mb-32 -mr-32"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Start Your Journey with Beangate</h3>
                        <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">Don't wait. Join the next batch of Java Full Stack Workshop and transform your career.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <a href="#register" className="btn-primary no-underline inline-block">Reserve Your Seat</a>
                            <button className="px-6 py-3 border-2 border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">Download Syllabus</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
