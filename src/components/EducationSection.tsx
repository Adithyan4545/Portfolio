import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, School, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const educationList = [
    {
      degree: 'B.E. Computer & Communication Engineering',
      institution: 'Sri Eshwar College of Engineering, Coimbatore',
      duration: '2024 – 2028',
      score: 'CGPA: 7.9',
      current: true,
      description: 'Focusing on Computer Science fundamentals, Data Structures & Algorithms, Full-Stack MERN Engineering, Machine Learning architectures, and Object-Oriented Systems.',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Srinivasa Vidhyalaya Matric Hr. Sec. School, Udumalpet',
      duration: '2023 – 2024',
      score: '85.3%',
      current: false,
      description: 'Completed higher secondary education specializing in Mathematics, Physics, Chemistry, and Computer Science.',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Srinivasa Vidhyalaya Matric Hr. Sec. School, Udumalpet',
      duration: '2021 – 2022',
      score: '84.6%',
      current: false,
      description: 'Completed secondary school education with distinction in Mathematics and Science.',
    },
  ];

  return (
    <section id="education" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Academic <span className="text-cyan-400">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Formal education background from high school to current engineering degree.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-8 max-w-4xl">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                edu.current 
                  ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.9)]' 
                  : 'bg-slate-950 border-slate-700'
              }`} />

              <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 glass-panel-hover">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.duration}
                  </span>

                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                    edu.current 
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30' 
                      : 'bg-slate-900 text-slate-300 border border-slate-800'
                  }`}>
                    {edu.score}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-sans mb-1">
                  {edu.degree}
                </h3>
                
                <p className="text-sm font-medium text-slate-400 flex items-center gap-2 mb-3">
                  <School className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{edu.institution}</span>
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
