import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Code2, Database, Cloud, Terminal, Sparkles, Filter, Trophy, Layers } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  category: 'all' | 'cs' | 'dev' | 'hackathon' | 'dsa';
  categoryLabel: string;
  badgeColor: string;
  icon: React.ReactNode;
  description: string;
  verificationText: string;
}

export const CertificationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const certifications: Certificate[] = [
    {
      id: 'dsa-udemy',
      title: 'Mastering Data Structures & Algorithms Using C and C++',
      issuer: 'Udemy',
      date: 'Verified Credential',
      category: 'cs',
      categoryLabel: 'Core CS & DSA',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      description: 'Comprehensive mastery of linear/non-linear data structures, algorithm analysis, recursion, memory management, and optimization techniques in C & C++.',
      verificationText: 'Resume & Course Verified',
    },
    {
      id: 'java-udemy',
      title: 'The Complete Java Programmer: From Scratch to Advanced',
      issuer: 'Udemy',
      date: 'June 2026',
      category: 'dev',
      categoryLabel: 'Programming',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      icon: <Terminal className="w-5 h-5 text-amber-400" />,
      description: 'Deep-dive certification covering object-oriented programming, Java collections framework, multithreading, stream APIs, and enterprise application development.',
      verificationText: 'Resume Verified Certificate',
    },
    {
      id: 'networks-udemy',
      title: 'Concepts of Computer Networks',
      issuer: 'Udemy',
      date: 'June 2026',
      category: 'cs',
      categoryLabel: 'Core CS & Networks',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      description: 'In-depth certification on the OSI layer model, TCP/IP protocol suite, network routing algorithms, subnets, packet analysis, and network security concepts.',
      verificationText: 'Resume Verified Certificate',
    },
    {
      id: 'python-infosys',
      title: 'Python Fundamentals',
      issuer: 'Infosys Springboard',
      date: 'Verified Credential',
      category: 'dev',
      categoryLabel: 'Programming',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      description: 'Foundational certification covering Python core syntax, object-oriented programming principles, data handling structures, and file manipulation.',
      verificationText: 'Infosys Verified',
    },
    {
      id: 'cloud-nptel',
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'National Certification',
      category: 'cs',
      categoryLabel: 'Cloud & Infrastructure',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      icon: <Cloud className="w-5 h-5 text-purple-400" />,
      description: 'National certification in cloud architecture, virtualization, distributed storage systems, containerization, and cloud infrastructure modeling.',
      verificationText: 'NPTEL Verified',
    },
    {
      id: 'sql-hackerrank',
      title: 'SQL Intermediate Certificate',
      issuer: 'HackerRank',
      date: 'Verified Credential',
      category: 'dsa',
      categoryLabel: 'Databases & Querying',
      badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      icon: <Database className="w-5 h-5 text-teal-400" />,
      description: 'Verified technical certification demonstrating intermediate SQL proficiency, complex multi-table joins, subqueries, indexing, and query optimization.',
      verificationText: 'HackerRank Verified',
    },
    {
      id: 'guidewire-hackathon',
      title: 'Guidewire DEVTrails University Hackathon 2026',
      issuer: 'Guidewire & EY',
      date: '2026',
      category: 'hackathon',
      categoryLabel: 'Hackathons & Competitions',
      badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      icon: <Trophy className="w-5 h-5 text-yellow-400" />,
      description: 'Certificate of Participation for national-level innovation hackathon co-hosted by Guidewire & EY, clearing initial competitive submission rounds.',
      verificationText: 'Guidewire & EY Verified',
    },
    {
      id: 'expedia-hackathon',
      title: 'Expedia Group Hackathon',
      issuer: 'Expedia Group',
      date: 'Participant',
      category: 'hackathon',
      categoryLabel: 'Hackathons & Competitions',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      icon: <Trophy className="w-5 h-5 text-sky-400" />,
      description: 'Official Participant Certificate in Expedia Group\'s engineering hackathon building scalable real-world tech solutions.',
      verificationText: 'Expedia Group Verified',
    },
    {
      id: 'deloitte-simulation',
      title: 'Technology Job Simulation',
      issuer: 'Deloitte Australia (Forage)',
      date: '2026',
      category: 'hackathon',
      categoryLabel: 'Industry Simulations',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      description: 'Completed practical tasks in tech consulting, software development, architecture review, and client technology solution planning.',
      verificationText: 'Deloitte & Forage Verified',
    },
    {
      id: 'skillrack-medals',
      title: 'SkillRack Problem Solving & 225+ Bronze Medals',
      issuer: 'SkillRack',
      date: '700+ Solved Problems',
      category: 'dsa',
      categoryLabel: 'Problem Solving & DSA',
      badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      icon: <Award className="w-5 h-5 text-rose-400" />,
      description: 'Official credential recognizing 700+ algorithmic coding challenges solved and 225+ Bronze Medals earned on SkillRack platform.',
      verificationText: 'SkillRack Verified',
    },
  ];

  const filterCategories = [
    { key: 'all', label: 'All Certificates', count: certifications.length },
    { key: 'cs', label: 'Core CS & Cloud', count: certifications.filter(c => c.category === 'cs').length },
    { key: 'dev', label: 'Programming', count: certifications.filter(c => c.category === 'dev').length },
    { key: 'hackathon', label: 'Hackathons & Simulations', count: certifications.filter(c => c.category === 'hackathon').length },
    { key: 'dsa', label: 'Databases & DSA', count: certifications.filter(c => c.category === 'dsa').length },
  ];

  const filteredCertifications = activeFilter === 'all'
    ? certifications
    : certifications.filter(c => c.category === activeFilter);

  return (
    <section id="certifications" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>06 // Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              Certifications & <span className="text-cyan-400">Credentials</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
              All 10 official industry certifications, hackathon certificates, and technical job simulations verified from my resume.
            </p>
          </div>

          {/* Stats Badge */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase">Total Verified</p>
              <p className="text-sm font-bold text-white font-mono">10 Certificates</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filter:</span>
          </div>
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                activeFilter === cat.key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/50'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                activeFilter === cat.key ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Certifications Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-panel p-6 rounded-2xl border border-slate-800 glass-panel-hover flex flex-col justify-between group hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Top Border Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Icon & Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {cert.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${cert.badgeColor}`}>
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white font-sans mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Date / Subtitle if available */}
                  {cert.date && (
                    <p className="text-[11px] font-mono text-cyan-400/90 mb-3">
                      {cert.date}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Verification */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.verificationText}</span>
                  </div>
                  <span className="text-slate-500 text-[10px] uppercase font-mono">{cert.categoryLabel}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationsSection;

