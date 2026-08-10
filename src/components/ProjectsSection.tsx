import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Activity, Users, FileText, Sprout, CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: React.ReactNode;
}

export const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'teamsync',
      name: 'TeamSync',
      badge: 'AI Collaboration Platform',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      description: 'AI-powered hackathon discovery and team collaboration platform enabling automated teammate matching and project tracking.',
      highlights: [
        'Hackathon discovery & team matching',
        'Groq AI chatbot for project ideas & stack guidance',
        'Task workflows & project milestone tracking',
        'JWT authentication & real-time notification system'
      ],
      technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq AI', 'JWT'],
      githubUrl: 'https://github.com/Adithyan4545',
      icon: <Users className="w-5 h-5 text-cyan-400" />,
    },
    {
      id: 'vehicleiq',
      name: 'VehicleIQ',
      badge: 'Predictive Health Platform',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'AI vehicle health monitoring and breakdown prediction platform leveraging sensor telemetry to preemptively detect component anomalies.',
      highlights: [
        'Sensor telemetry processing & breakdown prediction',
        'XGBoost & SHAP explainable breakdown risk scoring',
        'Real-time anomaly detection',
        'Fleet health dashboard',
        'WhatsApp breakdown alerts & nearest service center routing'
      ],
      technologies: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'React / Next.js', 'MongoDB'],
      githubUrl: 'https://github.com/Adithyan4545',
      icon: <Activity className="w-5 h-5 text-purple-400" />,
    },
    {
      id: 'notes-saver',
      name: 'Notes Saver',
      badge: 'Full-Stack Web App',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      description: 'Full-stack notes management application providing rich text editing, tag categorization, and cloud synchronization.',
      highlights: [
        'Rich text editing & tag categorization',
        'Instant search & note organization',
        'JWT authentication & encrypted storage',
        'Multi-device cloud sync'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/Adithyan4545',
      icon: <FileText className="w-5 h-5 text-blue-400" />,
    },
    {
      id: 'crop-recommendation',
      name: 'Crop Recommendation System',
      badge: 'ML Agriculture Advisor',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'Machine-learning based crop recommendation application predicting optimal crop cultivation based on soil metrics and weather API data.',
      highlights: [
        'Soil metric analysis (NPK, pH)',
        'Real-time weather API integration',
        'Scikit-learn classification model',
        'Agronomic recommendation engine'
      ],
      technologies: ['Python', 'Scikit-learn', 'FastAPI', 'NLP', 'Weather API'],
      githubUrl: 'https://github.com/Adithyan4545',
      icon: <Sprout className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Software & <span className="text-cyan-400">ML Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Full-stack platforms, predictive machine learning models, and software engineering projects built with modern tech stacks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-7 rounded-2xl border border-slate-800 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
                      {proj.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white font-sans">
                      {proj.name}
                    </h3>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-mono border ${proj.badgeColor}`}>
                    {proj.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Key Capabilities Bullet Points */}
                <div className="mb-5 p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
                  <p className="text-xs font-mono text-slate-400 mb-2.5 uppercase tracking-wide">Key Features:</p>
                  <ul className="space-y-1.5">
                    {proj.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-cyan-300/90 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository ↗</span>
                  </a>
                )}

                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo ↗</span>
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
