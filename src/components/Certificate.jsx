import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Linkedin, ArrowRight } from 'lucide-react';

const Certificate = () => {
    return (
        <section id="certification" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-bold text-sm mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            ISO Certified Training
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Elevate Your Portfolio in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Just 120 Minutes</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Upon successful completion of this intensive masterclass, you'll receive an official certificate from Beangate. This ISO-certified credential validates your active participation and newfound expertise in Java Full Stack essentials.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Verifiable Certificate ID",
                                "Global Industry Recognition",
                                "Shareable on LinkedIn & Portfolios",
                                "Lifetime Validity"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Award className="w-4 h-4 text-primary" />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn-primary flex items-center justify-center gap-2">
                                Learn More
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-100 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                                <Linkedin className="w-5 h-5 text-blue-600" />
                                Add to LinkedIn
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mt-12 lg:mt-0"
                    >
                        {/* Certificate Visual */}
                        <div className="relative z-10 bg-white p-4 md:p-8 rounded-3xl shadow-2xl border-8 border-slate-900/5 rotate-2 hover:rotate-0 transition-transform duration-700">
                            <div className="aspect-[1.4/1] bg-[#fffcf5] border-[12px] border-double border-amber-200 p-6 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/30 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -ml-16 -mb-16"></div>

                                <div className="mb-4">
                                    <Award className="w-16 h-16 text-amber-500 mx-auto" strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif text-slate-800 mb-2 tracking-[0.2em] font-bold uppercase">Certificate</h3>
                                <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-6 md:mb-10 font-bold underline underline-offset-8 decoration-amber-200">Of Professional Excellence</p>

                                <div className="space-y-4 mb-4">
                                    <p className="text-xs text-slate-500 italic">This is to certify that</p>
                                    <h4 className="text-3xl md:text-4xl font-serif text-primary font-bold">Your Name Here</h4>
                                    <p className="text-[11px] md:text-xs text-slate-500 max-w-sm leading-relaxed mx-auto italic">
                                        has successfully completed the intensive training program in <br />
                                        <span className="font-bold text-slate-700 not-italic">Java Full Stack Development (SPARK 3.0)</span>
                                    </p>
                                </div>

                                <div className="mt-auto w-full flex justify-between items-end">
                                    <div className="text-center w-24">
                                        <div className="border-b border-slate-300 pb-1 mb-1"></div>
                                        <p className="text-[8px] text-slate-400 uppercase tracking-widest">Date</p>
                                    </div>
                                    <div className="w-16 h-16 bg-amber-50 rounded-full border border-amber-100 flex items-center justify-center opacity-70">
                                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-amber-200"></div>
                                    </div>
                                    <div className="text-center w-24">
                                        <div className="border-b border-slate-300 pb-1 mb-1"></div>
                                        <p className="text-[8px] text-slate-400 uppercase tracking-widest">Authority</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Trust Badges */}
                        <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 animate-bounce-slow">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-500" />
                                <span className="text-sm font-bold text-slate-800">ISO 9001:2015</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certificate;
