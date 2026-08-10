import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'Mastering Data Structures & Algorithms Using C and C++',
      issuer: 'Udemy',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      description: 'Comprehensive mastery of linear/non-linear data structures, algorithm analysis, recursion, memory management, and optimization techniques in C & C++.',
    },
    {
      title: 'Python Fundamentals',
      issuer: 'Infosys Springboard',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      description: 'Foundational certification covering Python core syntax, object-oriented programming, data handling, and file manipulation.',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'National certification in cloud architecture, virtualization, distributed storage systems, and cloud infrastructure modeling.',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>06 // Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Industry <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Official certifications verified from my current professional resume.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-slate-800 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono border ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-sans mb-3 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Resume Verified Certificate</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
