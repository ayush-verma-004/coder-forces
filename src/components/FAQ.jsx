import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How can I master Java in just 2 hours?",
            answer: "While true mastery takes time, this workshop is designed to skip the fluff and teach you the exact 20% of Java that is used in 80% of industrial projects. It's a high-density 'kickstart' to your career."
        },
        {
            question: "Is this workshop interactive?",
            answer: "Yes, 100%! It's a live session where you can ask questions, see live-coding demos, and interact with the instructor throughout the 120 minutes."
        },
        {
            question: "Will I get the certificate immediately?",
            answer: "The certificate will be issued to your registered email address within 24-48 hours after the workshop ends, once your participation is verified."
        },
        {
            question: "Can I join if I have zero coding experience?",
            answer: "Technically yes, but even a basic understanding of what a 'program' is will help you absorb the 120 minutes of content much faster."
        },
        {
            question: "What happens if I miss the live session?",
            answer: "Don't worry! You'll receive a recording of the 2-hour masterclass plus all the bonus resources so you can learn at your own pace."
        }
    ];

    return (
        <section className="py-24 bg-white" id='faq'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
                        <HelpCircle className="w-4 h-4" />
                        Common Queries
                    </div>
                    <h2 className="section-title">Got <span className="text-primary">Questions?</span></h2>
                    <p className="section-subtitle mx-auto">Everything you need to know about the Java Full Stack Workshop.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-primary/20 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-slate-800 pr-8">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
