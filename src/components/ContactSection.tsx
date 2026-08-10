import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all fields before sending.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/adithyan.r2024cce@sece.ac.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit. Please try again later.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>07 // Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
                Let's <span className="text-cyan-400">Work Together</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mt-4">
                I'm actively looking for software development, full-stack, and AI/ML opportunities. Feel free to reach out directly or use the form.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Email */}
              <a
                href="mailto:adithyan.r2024cce@sece.ac.in"
                className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-4 group hover:border-cyan-500/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase">Email</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    adithyan.r2024cce@sece.ac.in
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919842265532"
                className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-4 group hover:border-blue-500/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase">Phone</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">
                    +91 98422 65532
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adithyan-r-753791333/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-4 group hover:border-purple-500/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase">LinkedIn</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">
                    Adithyan R (LinkedIn Profile) ↗
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Adithyan4545"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-4 group hover:border-teal-500/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/30 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase">GitHub</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                    https://github.com/Adithyan4545 ↗
                  </span>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right Column: FormSubmit Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-slate-800"
          >
            <h3 className="text-xl font-bold text-white font-sans mb-6">
              Send a Message
            </h3>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-300">
                  Thank you for reaching out. I have received your email at <span className="font-mono text-cyan-300">adithyan.r2024cce@sece.ac.in</span> and will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-4 py-2 text-xs font-mono rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/40 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello Adithyan, I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
