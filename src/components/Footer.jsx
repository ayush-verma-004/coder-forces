import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from "../assets/logo-beangate.png";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden relative">
            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <img src={logo} alt="Beangate Logo" width="144" height="48" className="h-12 w-auto bg-white p-2 rounded-lg grayscale brightness-200 object-contain" />
                        <p className="text-slate-400 leading-relaxed">
                            Beangate IT Solutions is dedicated to empowering the next generation of Java developers with industry-standard skills and practical knowledge.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: <Facebook className="w-5 h-5" />, link: "#" },
                                { icon: <Twitter className="w-5 h-5" />, link: "#" },
                                { icon: <Instagram className="w-5 h-5" />, link: "#" },
                                { icon: <Linkedin className="w-5 h-5" />, link: "#" },
                            ].map((social, i) => (
                                <a key={i} href={social.link} className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h3>
                        <ul className="space-y-4">
                            {['About Us', 'Our Courses', 'Mentorship', 'Success Stories', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="flex items-center group text-slate-400 hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Workshops */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Workshops</h3>
                        <ul className="space-y-4">
                            {['Java Full Stack', 'Spring Boot Mastery', 'Microservices Architecture', 'System Design', 'Interview BootCamp'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="flex items-center group text-slate-400 hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-sm">BeanGate IT solution LLP, Bhopal, Madhya Pradesh</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-sm">+91 9752740090</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-sm">admissions@beangate.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} Beangate IT Solutions. Built with passion for developers.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
