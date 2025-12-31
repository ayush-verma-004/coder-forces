import React from 'react';
import { Calendar, Clock, Globe, Award, BookOpen, MonitorPlay, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const DetailsGrid = () => {
    const details = [
        {
            icon: <Calendar className="w-6 h-6 text-primary" />,
            title: "Next Session",
            value: "Live Today",
            desc: "Register to get joining link"
        },
        {
            icon: <Clock className="w-6 h-6 text-primary" />,
            title: "Duration",
            value: "120 Mins",
            desc: "Pure intensive learning"
        },
        {
            icon: <MonitorPlay className="w-6 h-6 text-primary" />,
            title: "Format",
            value: "Live Online",
            desc: "Interactive masterclass"
        },
        {
            icon: <Globe className="w-6 h-6 text-primary" />,
            title: "Language",
            value: "Eng/Hindi",
            desc: "Simplified explanation"
        },
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Level",
            value: "Beginner",
            desc: "No prior coding needed"
        },
        {
            icon: <Award className="w-6 h-6 text-primary" />,
            title: "Certification",
            value: "E-Cert",
            desc: "ISO 9001:2015 Verified"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Essential Workshop Details</h2>
                    <p className="section-subtitle mx-auto">Everything you need to know about our industrial training program.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {details.map((detail, index) => (
                        <div key={index} className="modern-card p-8 group">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                {detail.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{detail.title}</h3>
                            <p className="text-2xl font-extrabold text-primary mb-2">{detail.value}</p>
                            <p className="text-slate-500 text-sm">{detail.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailsGrid;
