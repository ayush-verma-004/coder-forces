import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Download, CheckCircle2 } from "lucide-react";

import javaImg from "../assets/backend.jpg";
import frontendImg from "../assets/DataBase.jpg";
import backendImg from "../assets/front.jpg";
import skillsImg from "../assets/Untitled.jpg";

const slides = [
  {
    title: "Master Java in Just",
    highlight: "2 Hours",
    subtitle: "Intensive SPARK Masterclass",
    desc: "Join our high-impact 120-minute workshop designed to give you a solid foundation in Java and industry-standard backend development.",
    image: skillsImg,
    tag: "🔴 Live 120-Min Masterclass",
    cta1: "Secure Your Seat",
    cta2: "Download Roadmap",
    features: ["Zero to Hero in 2h", "Live Query Solving", "Practical Demo"],
  },
  {
    title: "120 Minutes of",
    highlight: "Pure Engineering",
    subtitle: "Spring Boot & Beyond",
    desc: "Experience how modern industries build backend systems. We'll live-code a robust service and show you the shortest path to mastery.",
    image: backendImg,
    tag: "🚀 Rapid Skill-Up",
    cta1: "Register Fast",
    cta2: "View 120-Min Timeline",
    features: ["Industry Live Demo", "Architecture Secrets", "Performance Hacks"],
  },
  {
    title: "Fast-Track Your",
    highlight: "Data Skills",
    subtitle: "Database Essentials in 2h",
    desc: "Don't spend weeks on basics. Learn how to design scalable database schemas and integrate them with Java in this intensive 2-hour session.",
    image: frontendImg,
    tag: "💾 Data Quick-Start",
    cta1: "Apply Now",
    cta2: "Check Topics",
    features: ["SQL Foundations", "Backend Secrets", "Real-world Schema"],
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 1500); // Faster slide interval
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (!isHovering) {
      startTimer();
    } else {
      stopTimer();
    }
    return () => stopTimer();
  }, [isHovering]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-32 pb-20 lg:pt-24 border-b border-slate-50"
    >
      {/* Background Decorative Elements - Use absolute positioning to ensure they don't affect layout */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -mr-20 -mt-20 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyan-50/50 rounded-full blur-3xl -ml-20 -mb-20 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-[600px] flex items-center">
        <div className="relative w-full overflow-visible">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100, position: "absolute", top: 0, left: 0 }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="grid lg:grid-cols-2 gap-12 items-center w-full"
            >
              {/* Text Content - Fixed height container to prevent shift */}
              <div className="space-y-8 min-h-[400px] lg:h-[500px] flex flex-col justify-start lg:justify-center mt-8 lg:mt-0">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm w-fit shrink-0 mb-2"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {slides[current].tag}
                </motion.span>

                <div className="space-y-4 shrink-0">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                    {slides[current].title} <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {slides[current].highlight}
                    </span>
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-700">
                    {slides[current].subtitle}
                  </h2>
                  <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
                    {slides[current].desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 shrink-0">
                  {slides[current].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 bg-slate-100/50 px-3 py-1.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 shrink-0">
                  <a href="#register" className="btn-primary group flex items-center justify-center gap-2 px-10 py-5 text-lg shadow-2xl shadow-primary/30 no-underline">
                    {slides[current].cta1}
                    <Play className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <button className="btn-outline flex items-center justify-center gap-2 px-10 py-5 text-lg">
                    {slides[current].cta2}
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image Content - Fixed aspect ratio to prevent CLS */}
              <div className="relative lg:ml-auto w-full max-w-[550px] aspect-[11/10]">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.05, duration: 0.4 }}
                  className="relative group w-full h-full"
                >
                  <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-3xl transform transition-transform group-hover:scale-110"></div>
                  <img
                    src={slides[current].image}
                    alt={slides[current].title}
                    fetchpriority={current === 0 ? "high" : "low"}
                    loading={current === 0 ? "eager" : "lazy"}
                    width="550"
                    height="500"
                    className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-[12px] border-white transform transition-transform group-hover:rotate-1"
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-[-80px] md:bottom-[-100px] left-0 right-0 flex items-center justify-between z-30">
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${current === idx ? "bg-primary w-12" : "bg-slate-200 w-2.5 hover:bg-slate-300"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-slate-100 text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-premium"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-slate-100 text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-premium"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
