import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-slate-950 border-t border-slate-900 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Titles */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <span className="text-sm font-bold text-white font-sans">ADITHYAN R</span>
          <span className="text-slate-400 text-xs">
            C++ Developer • MERN Stack Developer • Full Stack Developer
          </span>
          <span className="text-slate-600 text-[11px] mt-1">
            Sri Eshwar College of Engineering • Udumalpet, Tamil Nadu
          </span>
        </div>

        {/* Right: Quick Links & Back to top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Adithyan4545"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/adithyan-r-753791333/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="mailto:adithyan.r2024cce@sece.ac.in"
            className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
