import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Code2, Rocket, CheckCircle2 } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: 'Guidewire DEVTrails University Hackathon 2026',
      subtitle: 'Cleared 1st Round',
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      color: 'from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/40',
      badge: '🏆 Hackathon Qualified',
      badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      details: 'Successfully cleared the initial round of the prestigious national-level Guidewire DEVTrails University Hackathon 2026.',
    },
    {
      title: 'LeetCode Problem Solving',
      subtitle: '130+ Solved Problems',
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      color: 'from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/40',
      badge: '💻 DSA Expertise',
      badgeClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      details: 'Solved over 130+ Data Structures & Algorithms challenges across arrays, strings, trees, dynamic programming, and graphs.',
    },
    {
      title: 'Smart India Hackathon (SIH)',
      subtitle: 'College Round Cleared',
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      color: 'from-purple-500/20 via-indigo-500/10 to-transparent border-purple-500/40',
      badge: '🚀 SIH Qualifier',
      badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      details: 'Cleared the official problem statement round at Sri Eshwar College of Engineering level for Smart India Hackathon.',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>04 // Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Key <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Recognitions, competitive coding achievements, and hackathon accomplishments.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-7 rounded-2xl border bg-gradient-to-b ${item.color} glass-panel-hover flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Subtle accent backdrop blur */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-white/5 blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
                    {item.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono border ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-sans mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-mono text-cyan-400 font-semibold mb-3">
                  {item.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Achievement</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
