import React from 'react';
import { Gift, Briefcase, UserCircle, FileText, CheckCircle } from 'lucide-react';

const Bonuses = () => {
    const bonuses = [
        {
            icon: <Gift className="w-8 h-8 text-primary" />,
            title: "Java Full Stack Roadmap",
            desc: "Expert-curated path to master Java in 2024, provided exclusively after the session.",
            val: "Price: ₹2,000 (Free)"
        },
        {
            icon: <FileText className="w-8 h-8 text-primary" />,
            title: "Interview Cheat-Sheet",
            desc: "Most asked Java interview questions & optimized answers for freshers.",
            val: "Price: ₹3,000 (Free)"
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-primary" />,
            title: "Code Snippets Library",
            desc: "Reusable Java & Spring Boot snippets discussed during the workshop.",
            val: "Price: ₹2,000 (Free)"
        },
        {
            icon: <UserCircle className="w-8 h-8 text-primary" />,
            title: "Special Career Session",
            desc: "Extra 30-min bonus segment on how to land high-paying Java jobs.",
            val: "Price: ₹4,000 (Free)"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4">Value Added Bonuses</span>
                    <h2 className="section-title">Exclusive Benefits for SPARK Students</h2>
                    <p className="section-subtitle mx-auto">Get access to premium features and services work ₹14,000+ for absolutely free.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bonuses.map((bonus, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-premium group hover:border-primary/20 transition-all flex flex-col h-full"
                        >
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {bonus.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{bonus.title}</h3>
                            <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{bonus.desc}</p>
                            <div className="pt-4 border-t border-slate-50">
                                <span className="text-xs font-bold text-accent uppercase tracking-wider">{bonus.val}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-primary text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mt-32 -mr-32"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to kickstart your career?</h3>
                        <p className="text-blue-100">Unlock all these bonuses by joining the SPARK Batch 3.0 tonight!</p>
                    </div>
                    <a href="#register" className="relative z-10 px-10 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 no-underline inline-block">
                        Claim Your Seat Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Bonuses;
