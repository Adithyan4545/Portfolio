import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Target, Mail, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    { label: 'Degree', value: 'B.E. Computer & Communication Engineering' },
    { label: 'Institution', value: 'Sri Eshwar College of Engineering' },
    { label: 'Graduation Year', value: '2024 – 2028 (3rd Year)' },
    { label: 'Academic Standing', value: 'CGPA: 7.9' },
    { label: 'Location', value: 'Udumalpet, Tamil Nadu, India' },
    { label: 'Core Focus', value: 'Software Dev, Full-Stack, AI/ML, DSA' },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <User className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Engineering <span className="text-cyan-400">Intelligent Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main About Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-slate-800 space-y-6"
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Computer & Communication Engineer</span>
            </h3>

            <p className="text-slate-300 leading-relaxed text-base">
              I am a third-year B.E. Computer and Communication Engineering student at Sri Eshwar College of Engineering with a passion for architecting robust software systems and modern web applications.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              My technical interests encompass software development, full-stack web architectures, AI/ML modeling, backend API engineering, and strong problem-solving in Data Structures and Algorithms (DSA).
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="block text-2xl font-bold font-mono text-cyan-400">7.9</span>
                <span className="text-xs text-slate-400 font-mono uppercase">Current CGPA</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="block text-2xl font-bold font-mono text-blue-400">130+</span>
                <span className="text-xs text-slate-400 font-mono uppercase">LeetCode Solved</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center col-span-2 sm:col-span-1">
                <span className="block text-2xl font-bold font-mono text-purple-400">2026</span>
                <span className="text-xs text-slate-400 font-mono uppercase">Placement Batch</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Specifications Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-800"
          >
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800">
              Technical Overview
            </h3>

            <div className="divide-y divide-slate-800/80">
              {highlights.map((item, idx) => (
                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-mono text-slate-400 text-xs sm:w-1/3 mb-1 sm:mb-0">
                    {item.label}
                  </span>
                  <span className="text-slate-200 font-medium sm:w-2/3 text-left sm:text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
