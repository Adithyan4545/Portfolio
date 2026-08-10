import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight, Mail, Code, Terminal, Sparkles } from 'lucide-react';
import { AnimatedGradientBackground } from './ui/animated-gradient-background';

export const HeroSection: React.FC = () => {
  const resumeUrl = import.meta.env.BASE_URL + 'official_resume.pdf';
  const profilePhotoUrl = import.meta.env.BASE_URL + 'profile.jpg';

  return (
    <AnimatedGradientBackground className="min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for Placements & Internships 2026</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans">
                ADITHYAN <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">R</span>
              </h1>

              {/* Roles Badge Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900/90 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 shadow-sm">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" /> C++ Developer
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900/90 text-blue-300 border border-blue-500/30 flex items-center gap-1.5 shadow-sm">
                  <Code className="w-3.5 h-3.5 text-blue-400" /> MERN Stack Developer
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900/90 text-purple-300 border border-purple-500/30 flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Frontend Developer
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900/90 text-teal-300 border border-teal-500/30 flex items-center gap-1.5 shadow-sm">
                  <Terminal className="w-3.5 h-3.5 text-teal-400" /> Backend Developer
                </span>
              </div>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              Third-year Computer and Communication Engineering student passionate about building impactful real-world solutions in AI/ML, full-stack development, and software engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Connect:</span>
              <a
                href="https://github.com/Adithyan4545"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-slate-900/90 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 transition-all hover:scale-105 shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/adithyan-r-753791333/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-slate-900/90 text-slate-300 hover:text-blue-400 border border-slate-800 hover:border-blue-500/50 transition-all hover:scale-105 shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Sleek Framed Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer Glowing Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />

              {/* Main Photo Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 p-3 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <img
                    src={profilePhotoUrl}
                    alt="Adithyan R Profile Photo"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback if image path fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                  {/* Card Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-mono text-cyan-400 font-semibold">Sri Eshwar College of Engg.</p>
                        <p className="text-xs text-slate-300">B.E Computer & Comm. Engg.</p>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </AnimatedGradientBackground>
  );
};

export default HeroSection;
