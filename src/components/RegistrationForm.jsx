import React, { useState } from 'react';
import { User, Mail, Smartphone, GraduationCap, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// UPDATE THIS LINK WITH YOUR FORMSPREE ENDPOINT
const FORMSPREE_URL = "https://formspree.io/f/your-id-here";

const RegistrationForm = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        college: '',
        semester: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ fullName: '', email: '', phone: '', college: '', semester: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="register" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mb-48"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 uppercase tracking-wider">Join Batch 3.0</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Secure Your <span className="text-primary">Spot Now</span></h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Fill in your details to register for the 120-minute Live Java Masterclass. Limited seats available!
                    </p>
                </div>

                <div className="modern-card p-8 md:p-12 min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Registration Successful!</h3>
                                <p className="text-slate-600 mb-8">
                                    Thank you for registering. You will receive the session link on your WhatsApp/Email shortly.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="btn-primary"
                                >
                                    Register Another Person
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                required
                                                type="text"
                                                name="fullName"
                                                placeholder="John Doe"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Email (For Certificate)</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">WhatsApp Number</label>
                                        <div className="relative">
                                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* College/Org */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">College / Organization</label>
                                        <div className="relative">
                                            <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                required
                                                type="text"
                                                name="college"
                                                placeholder="University Name"
                                                value={formData.college}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 font-medium"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Semester/Year */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Current Semester / Year</label>
                                    <select
                                        required
                                        name="semester"
                                        value={formData.semester}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 font-medium bg-white appearance-none"
                                    >
                                        <option value="">Select Semester/Year</option>
                                        <option value="1st Year">1st Year / 1-2 Sem</option>
                                        <option value="2nd Year">2nd Year / 3-4 Sem</option>
                                        <option value="3rd Year">3rd Year / 5-6 Sem</option>
                                        <option value="4th Year">4th Year / 7-8 Sem</option>
                                        <option value="Graduate">Passout / Working Professional</option>
                                    </select>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-2xl">
                                        <AlertCircle className="w-5 h-5" />
                                        <span className="text-sm font-bold">Something went wrong. Please try again or contact support.</span>
                                    </div>
                                )}

                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className={`btn-primary w-full py-5 text-xl shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status === 'loading' ? 'Processing...' : 'Complete Registration'}
                                    <Send className={`w-6 h-6 ${status === 'loading' ? 'animate-pulse' : ''}`} />
                                </button>

                                <p className="text-center text-slate-500 text-sm">
                                    By registering, you agree to our terms and conditions.
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
