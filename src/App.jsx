/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import sidPhoto from './sid.jpeg';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  Award, 
  GraduationCap, 
  Briefcase,
  ChevronRight,
  Terminal,
  Sun,
  Moon,
  Layers
} from 'lucide-react';

const SidhantPortfolio = () => {
  const [version, setVersion] = useState('dark'); // 'dark' or 'light'

  const resumeData = {
    name: "Sidhant Barapatre",
    location: "Pune, Maharashtra",
    email: "sidhantbarapatre12@gmail.com",
    phone: "+91-9921504762",
    summary: "Passionate and results-driven Web Developer and Tech Enthusiast with a strong foundation in Computer Science Engineering. Proficient in building dynamic and responsive web applications using the MERN stack. Skilled in both frontend and backend development, with a keen interest in creating innovative and impactful digital solutions.",
    skills: {
      technologies: ["Frontend", "Backend", "Express.js", "Node.js", "React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "AWS"],
      languages: ["C++"],
      databases: ["MySQL", "MongoDB"],
      others: ["Data Structures and Algorithms"]
    },
    experience: [
      {
        company: "ByteHint It Solutions",
        role: "Web Development Intern",
        period: "May 2025 – Aug 2025",
        location: "Remote",
        highlights: [
          "Developed a fully functional Admin Panel for EXM Tweaks using the MERN stack.",
          "Centralized critical support operations by integrating key generation and license verification.",
          "Improved operational efficiency and response times through user management and system monitoring features."
        ]
      }
    ],
    projects: [
      {
        title: "Fashiomart",
        type: "Full Stack E-commerce Web Application",
        link: "https://fashiomart-frontend.vercel.app/",
        highlights: [
          "Developed using MERN stack (MongoDB, Express.js, React, Node.js).",
          "Integrated Razorpay payment gateway for secure transactions.",
          "Implemented Cloudinary for efficient cloud storage of product images.",
          "Built a comprehensive Admin Panel for order and product management."
        ]
      },
      {
        title: "SB Estate",
        type: "Full Stack Real Estate Web Application",
        link: "https://real-estate-1-yzc2.onrender.com/",
        highlights: [
          "Developed dynamic and responsive real estate app using MERN stack.",
          "Implemented JWT authentication for secure user sessions.",
          "Utilized Firebase for scalable image storage.",
          "Designed intuitive user interfaces and dashboards for property browsing."
        ]
      }
    ],
    education: [
      {
        institution: "D Y Patil International University",
        degree: "Bachelor of Technology in Computer Science",
        period: "2022 – Present",
        score: "CGPA - 8.12/10",
        location: "Pune, Maharashtra"
      },
      {
        institution: "D.B Science College",
        degree: "HSC",
        period: "2021",
        score: "82.17%",
        location: "Gondia, Maharashtra"
      },
      {
        institution: "Gujarati National High School",
        degree: "SSC",
        period: "2019",
        score: "82.60%",
        location: "Gondia, Maharashtra"
      }
    ],
    certifications: [
      {
        text: "AWS Certified Cloud Practitioner",
        link: "https://www.credly.com/badges/8460bf31-892a-49a8-b924-3aeed9a18482/public_url"
      },
      {
        text: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
        link: "https://drive.google.com/file/d/1lYWVuVfawxX6W-GUnoRXTKb9wnrFVmLv/view"
      },
      {
        text: "Solved 260+ problems on LeetCode and 500+ cross platforms",
        link: "https://leetcode.com/u/sidhantN/"
      }
    ]
  };

  const isDark = version === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${isDark ? 'bg-[#0a0a0a] text-[#f5f5f4]' : 'bg-[#f8fafc] text-[#0f172a]'} selection:bg-emerald-500/30 selection:text-emerald-200`}>
      {/* Version Switcher Overlay */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button 
          onClick={() => setVersion(isDark ? 'light' : 'dark')}
          className={`group flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all duration-300 ${isDark ? 'bg-white text-black hover:bg-emerald-50' : 'bg-slate-900 text-white hover:bg-indigo-900'}`}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="font-bold text-sm uppercase tracking-widest">Switch to {isDark ? 'Light' : 'Dark'} Mode</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${isDark ? 'bg-black/80 border-white/5' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`font-mono text-sm font-bold tracking-tighter uppercase ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`}>Sidhant Barapatre</span>
          </div>
          <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest opacity-60">
            <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
            <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            key={version + 'hero-text'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border transition-colors duration-500 ${isDark ? 'bg-emerald-900/20 text-emerald-400 border-emerald-500/20' : 'bg-indigo-50 text-indigo-600 border-indigo-200'}`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-emerald-400' : 'bg-indigo-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-emerald-500' : 'bg-indigo-600'}`}></span>
              </span>
              Available for opportunities
            </div>
            <h1 className="text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
              Sidhant <br />
              <span className={`transition-colors duration-500 ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`}>Barapatre</span>
            </h1>
            <p className={`text-xl leading-relaxed mb-10 max-w-lg transition-colors duration-500 ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
              {resumeData.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${resumeData.email}`}
                className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 group shadow-lg ${isDark ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-900/20' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-900/20'}`}
              >
                Get in touch
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/SIDHANTBARAPATRE" target="_blank" rel="noreferrer" className={`p-3 rounded-full border transition-colors ${isDark ? 'border-white/10 hover:border-emerald-500 hover:text-emerald-500' : 'border-slate-200 hover:border-indigo-600 hover:text-indigo-600'}`}>
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/sidhant-barapatre-042920243/" target="_blank" rel="noreferrer" className={`p-3 rounded-full border transition-colors ${isDark ? 'border-white/10 hover:border-emerald-500 hover:text-emerald-500' : 'border-slate-200 hover:border-indigo-600 hover:text-indigo-600'}`}>
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            key={version + 'hero-img'}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className={`aspect-[4/5] rounded-[2rem] overflow-hidden relative group border transition-colors duration-500 ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-slate-100 border-slate-200'}`}>
              <img 
                src={sidPhoto} 
                alt="Sidhant Barapatre"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 mix-blend-multiply group-hover:opacity-0 transition-opacity ${isDark ? 'bg-emerald-500/10' : 'bg-indigo-500/5'}`}></div>
            </div>
            {/* Decorative elements */}
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full -z-10 blur-3xl opacity-40 transition-colors duration-500 ${isDark ? 'bg-emerald-500/20' : 'bg-indigo-500/20'}`}></div>
            <div className={`absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10 blur-3xl opacity-40 transition-colors duration-500 ${isDark ? 'bg-blue-500/20' : 'bg-cyan-500/20'}`}></div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className={`py-24 border-y transition-colors duration-500 ${isDark ? 'bg-[#141414] border-white/5' : 'bg-white border-slate-100'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <h2 className={`text-sm font-mono uppercase tracking-widest mb-4 transition-colors duration-500 ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`}>Technical Arsenal</h2>
                <h3 className="text-4xl font-bold tracking-tight">Tools & Technologies</h3>
              </div>
              <p className={`max-w-sm transition-colors duration-500 ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                A comprehensive suite of technologies I use to bring digital ideas to life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Development', icon: Code2, skills: resumeData.skills.technologies },
                { title: 'Data & Logic', icon: Database, skills: [...resumeData.skills.databases, ...resumeData.skills.languages] },
                { title: 'Cloud & Others', icon: Cloud, skills: ['AWS', 'DSA'] }
              ].map((group, idx) => (
                <div key={idx} className={`p-8 rounded-3xl border transition-all duration-500 ${isDark ? 'bg-[#1a1a1a] border-white/5 hover:border-emerald-500/30' : 'bg-slate-50 border-slate-200 hover:border-indigo-300'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm border transition-colors duration-500 ${isDark ? 'bg-black border-white/5' : 'bg-white border-slate-200'}`}>
                    <group.icon className={`w-6 h-6 ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`} />
                  </div>
                  <h4 className="text-lg font-bold mb-4">{group.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-colors duration-500 ${isDark ? 'bg-black/40 border-white/5 text-white/70' : 'bg-white border-slate-200 text-slate-600'}`}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Projects */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className={`text-sm font-mono uppercase tracking-widest mb-4 transition-colors duration-500 ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`}>The Journey</h2>
                <h3 className="text-4xl font-bold tracking-tight mb-8">Experience & Projects</h3>
                <p className={`leading-relaxed transition-colors duration-500 ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                  Building scalable solutions and learning through every challenge. My professional path is defined by a commitment to clean code and user-centric design.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {/* Experience */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <Briefcase className={`w-5 h-5 ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`} />
                  <h4 className="text-xl font-bold">Work Experience</h4>
                </div>
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className={`relative pl-8 border-l pb-4 transition-colors duration-500 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                    <div className={`absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full transition-all duration-500 ${isDark ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.3)]'}`}></div>
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg font-bold">{exp.role}</h5>
                      <span className={`text-xs font-mono opacity-40`}>{exp.period}</span>
                    </div>
                    <p className={`font-semibold text-sm mb-4 transition-colors duration-500 ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`}>{exp.company} • {exp.location}</p>
                    <ul className="space-y-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className={`text-sm flex gap-3 transition-colors duration-500 ${isDark ? 'text-white/50' : 'text-slate-600'}`}>
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-500 ${isDark ? 'bg-white/20' : 'bg-slate-300'}`}></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div id="projects" className="pt-12 space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <Terminal className={`w-5 h-5 ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`} />
                  <h4 className="text-xl font-bold">Featured Projects</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {resumeData.projects.map((project, idx) => (
                    <a 
                      key={idx} 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`group p-6 rounded-3xl border transition-all duration-500 block ${isDark ? 'bg-[#141414] border-white/5 hover:border-emerald-500/30 hover:shadow-emerald-900/10' : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-indigo-900/5'} hover:shadow-2xl`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h5 className={`text-lg font-bold transition-colors duration-500 ${isDark ? 'group-hover:text-emerald-500' : 'group-hover:text-indigo-600'}`}>{project.title}</h5>
                        <ExternalLink className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className={`text-xs font-mono mb-4 uppercase tracking-wider transition-colors duration-500 ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`}>{project.type}</p>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className={`text-xs leading-relaxed flex gap-2 transition-colors duration-500 ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                            <span className={`mt-1 w-1 h-1 rounded-full shrink-0 transition-colors duration-500 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}></span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certs */}
        <section className={`py-24 border-t transition-colors duration-500 ${isDark ? 'bg-[#050505] border-white/5' : 'bg-slate-900 text-white border-slate-800'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <GraduationCap className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-indigo-400'}`} />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-12">
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx} className={`relative pl-8 border-l transition-colors duration-500 ${isDark ? 'border-white/10' : 'border-white/20'}`}>
                      <div className={`absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full transition-colors duration-500 ${isDark ? 'bg-emerald-400' : 'bg-indigo-400'}`}></div>
                      <h4 className="text-lg font-bold mb-1">{edu.institution}</h4>
                      <p className={`text-sm font-medium mb-2 transition-colors duration-500 ${isDark ? 'text-emerald-400' : 'text-indigo-400'}`}>{edu.degree}</p>
                      <div className="flex justify-between text-xs opacity-40 font-mono">
                        <span>{edu.period}</span>
                        <span>{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-12">
                  <Award className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-indigo-400'}`} />
                  <h3 className="text-2xl font-bold">Achievements</h3>
                </div>
                <div className="space-y-6">
                  {resumeData.certifications.map((cert, idx) => (
                    <a 
                      key={idx} 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`group p-6 rounded-2xl border flex items-center justify-between gap-4 transition-all duration-500 ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-emerald-500/40' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-indigo-400/40'}`}
                    >
                      <p className="text-sm leading-relaxed opacity-80">{cert.text}</p>
                      <ExternalLink className="w-4 h-4 shrink-0 opacity-20 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h2 className={`text-sm font-mono uppercase tracking-widest mb-6 transition-colors duration-500 ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`}>Get In Touch</h2>
          <h3 className="text-6xl font-bold tracking-tighter mb-12">Let's build something <br /> amazing together.</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <a href={`mailto:${resumeData.email}`} className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500 group ${isDark ? 'bg-[#141414] border-white/5 hover:border-emerald-500' : 'bg-white border-slate-200 hover:border-indigo-600'}`}>
              <Mail className={`w-5 h-5 group-hover:scale-110 transition-transform ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`} />
              <span className="font-medium opacity-80">{resumeData.email}</span>
            </a>
            <a href={`tel:${resumeData.phone}`} className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500 group ${isDark ? 'bg-[#141414] border-white/5 hover:border-emerald-500' : 'bg-white border-slate-200 hover:border-indigo-600'}`}>
              <Phone className={`w-5 h-5 group-hover:scale-110 transition-transform ${isDark ? 'text-emerald-500' : 'text-indigo-600'}`} />
              <span className="font-medium opacity-80">{resumeData.phone}</span>
            </a>
          </div>

          <div className={`pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-mono opacity-30 uppercase tracking-widest transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
            <p>© 2026 Sidhant Barapatre. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="https://github.com/SIDHANTBARAPATRE" target="_blank" rel="noreferrer" className={`transition-colors duration-500 ${isDark ? 'hover:text-emerald-500' : 'hover:text-indigo-600'}`}>Github</a>
              <a href="https://www.linkedin.com/in/sidhant-barapatre-042920243/" target="_blank" rel="noreferrer" className={`transition-colors duration-500 ${isDark ? 'hover:text-emerald-500' : 'hover:text-indigo-600'}`}>Linkedin</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default function App() {
  return <SidhantPortfolio />;
}