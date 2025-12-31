import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo-beangate.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Curriculum', href: '#curriculum' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certification', href: '#certification' },
        { name: 'Register', href: '#register' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Beangate Logo" width="130" height="40" className="h-8 md:h-12 w-auto object-contain" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-bold tracking-wide uppercase transition-colors ${scrolled ? 'text-slate-700 hover:text-primary' : 'text-slate-800 hover:text-primary'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-6">
                        <div className="flex items-center gap-4 text-slate-500">
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                        <a href="#register" className="btn-primary px-8 py-3 text-sm no-underline inline-block">
                            Enroll Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${scrolled ? 'text-slate-900' : 'text-slate-900'} focus:outline-none p-2 rounded-lg bg-slate-100/50`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden absolute left-4 right-4 top-full mt-4 bg-white rounded-3xl shadow-2xl overflow-hidden z-50 border border-slate-100"
                        >
                            <div className="px-6 py-8 space-y-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-lg font-bold text-slate-800 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-6 border-t border-slate-50">
                                    <a href="#register" onClick={() => setIsOpen(false)} className="w-full btn-primary py-4 rounded-2xl shadow-xl shadow-primary/20 text-center block no-underline">
                                        Enroll Now
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;