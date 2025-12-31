import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 3);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = deadline - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-slate-900 border-y border-slate-800 py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-md text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                            <Timer className="w-4 h-4" />
                            Enrollment Ending Soon
                        </div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Live Workshop starts in</h3>
                        <p className="text-slate-400">Join 1000+ students for this high-impact 120-minute Java masterclass. Don't miss out!</p>
                    </div>

                    <div className="flex gap-4 md:gap-8 justify-center">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="flex flex-col items-center">
                                <div className="w-20 h-24 md:w-28 md:h-32 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group shrink-0">
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                    <span className="text-3xl md:text-5xl font-mono font-black text-white tabular-nums w-full text-center">{String(value).padStart(2, '0')}</span>
                                    <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] mt-2 font-bold">{unit}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex-shrink-0">
                        <a href="#register" className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-2xl shadow-white/5 hover:-translate-y-1 inline-block no-underline">
                            REGISTER NOW
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
