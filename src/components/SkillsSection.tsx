import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Server, Brain, Database, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages & Core',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30',
      skills: [
        'C++',
        'C',
        'Python',
        'Java',
        'SQL',
        'Data Structures & Algorithms',
        'OOP',
      ],
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="w-5 h-5 text-blue-400" />,
      color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Next.js',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-5 h-5 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30',
      skills: [
        'Node.js',
        'Express.js',
        'FastAPI',
        'REST APIs',
        'JWT',
      ],
    },
    {
      title: 'AI / Machine Learning',
      icon: <Brain className="w-5 h-5 text-teal-400" />,
      color: 'from-teal-500/20 to-emerald-500/10 border-teal-500/30',
      skills: [
        'Python',
        'XGBoost',
        'SHAP',
        'LSTM',
        'Scikit-learn',
        'NLP',
      ],
    },
    {
      title: 'Database & Developer Tools',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30',
      skills: [
        'MongoDB',
        'Git',
        'GitHub',
        'Docker',
        'AWS',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>02 // Skills & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Technical <span className="text-cyan-400">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            A comprehensive overview of programming languages, frameworks, AI libraries, and engineering tools I utilize.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`glass-panel p-6 rounded-2xl border bg-gradient-to-br ${cat.color} glass-panel-hover flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white font-sans">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
