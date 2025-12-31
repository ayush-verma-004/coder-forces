import React from 'react';
import { CheckCircle2, Star, Users, Target, BookOpen } from 'lucide-react';

const LearningOutcomes = () => {
    const outcomes = [
        "Core Java Syntax in 30 Mins",
        "Mastering OOPS for Real-world Apps",
        "Stream API & Modern Functional Java",
        "Database connectivity in minutes",
        "Live API development walkthrough",
        "Spring Boot Starter Architecture",
        "Performance Optimization Secrets",
        "Production-scale Code Best Practices",
        "Your Java Roadmap for 2024"
    ];

    const highlights = [
        {
            icon: <Star className="w-6 h-6 text-yellow-500" />,
            title: "Zero-to-One in 2h",
            desc: "The fastest way to understand complex Java concepts."
        },
        {
            icon: <Users className="w-6 h-6 text-blue-500" />,
            title: "Live Q&A Session",
            desc: "Get your doubts cleared in real-time by an expert."
        },
        {
            icon: <Target className="w-6 h-6 text-accent" />,
            title: "Actionable Insights",
            desc: "No vague theory. Just skills you can use immediately."
        },
        {
            icon: <BookOpen className="w-6 h-6 text-primary" />,
            title: "Focused Curriculum",
            desc: "120 minutes of high-density engineering knowledge."
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">What You'll Master in <span className="text-primary">120 Minutes</span></h2>
                    <p className="section-subtitle mx-auto">
                        Skip the 6-month tutorials. Learn the "why" and "how" of Java Full Stack from industry veterans in this intensive session.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Outcomes List */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-premium">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                Core Learning Modules
                            </h3>
                            <div className="grid sm:grid-cols-1 gap-4">
                                {outcomes.map((outcome, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <a href="#register" className="btn-primary w-full sm:w-auto px-10 inline-block text-center no-underline">
                                    Start Learning Today
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Why Choose Us Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="modern-card p-6 flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}

                        {/* Trust Signal Card */}
                        <div className="col-span-full bg-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 transform scale-150 rotate-12 transition-transform group-hover:scale-[1.7]">
                                <Users className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-2">Join 1000+ Students</h4>
                                <p className="text-blue-100 mb-6">Start your journey with Beangate and join a community of aspiring developers.</p>
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" width="40" height="40" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-accent flex items-center justify-center text-xs font-bold">
                                        +1k
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningOutcomes;
