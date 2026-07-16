import React, { useEffect, useRef } from 'react';
import { Code2, CreditCard, Shield, ShoppingBag, ArrowUpRight, Cpu } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Rahela Fashion Design',
    type: 'Work Experience',
    icon: <Code2 className="w-5 h-5" />,
    accent: 'from-green-500 to-emerald-400',
    accentSoft: 'bg-green-500/10 border-green-500/20',
    accentText: 'text-green-400',
    accentGlow: 'rgba(34, 197, 94, 0.15)',
    description:
      'Worked on developing responsive and modern frontend interfaces using Next.js and Tailwind CSS while maintaining professional UI consistency and performance optimization.',
    tags: ['Next.js', 'Tailwind CSS', 'UI/UX', 'Performance'],
  },
  {
    id: 2,
    role: 'Founder & Developer',
    company: 'Yegna Pay',
    type: 'Startup Project',
    icon: <CreditCard className="w-5 h-5" />,
    accent: 'from-emerald-400 to-green-600',
    accentSoft: 'bg-emerald-500/10 border-emerald-500/20',
    accentText: 'text-emerald-400',
    accentGlow: 'rgba(52, 211, 153, 0.15)',
    description:
      'Building a developer-first Ethiopian payment gateway system with payment verification, dashboards, webhooks, trust systems, and scalable fintech infrastructure.',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'Webhooks', 'Fintech'],
  },
  {
    id: 3,
    role: 'Creator',
    company: 'Cyber Lab',
    type: 'Solo Project',
    icon: <Shield className="w-5 h-5" />,
    accent: 'from-green-600 to-teal-500',
    accentSoft: 'bg-teal-500/10 border-teal-500/20',
    accentText: 'text-teal-400',
    accentGlow: 'rgba(20, 184, 166, 0.15)',
    description:
      'Developing a cybersecurity assessment platform inspired by DVWA for testing and evaluating students through isolated vulnerable environments and automated grading systems.',
    tags: ['Docker', 'Go', 'Sandboxing', 'Security', 'Assessment'],
  },
  {
    id: 4,
    role: 'Full Stack Developer',
    company: 'Ayne Awaj',
    type: 'Product Build',
    icon: <ShoppingBag className="w-5 h-5" />,
    accent: 'from-green-500 to-lime-400',
    accentSoft: 'bg-lime-500/10 border-lime-500/20',
    accentText: 'text-lime-400',
    accentGlow: 'rgba(163, 230, 53, 0.15)',
    description:
      'Creating a luxury TikTok-driven e-commerce platform with premium UI/UX, Telegram integrations, admin dashboard systems, and mobile-first architecture.',
    tags: ['React', 'Telegram API', 'Framer Motion', 'E-Commerce', 'Mobile-First'],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('exp-visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = sectionRef.current?.querySelectorAll('.exp-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative text-white py-32 md:py-48 overflow-hidden"
    >
      {/* Abstract Grid and Vignette */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid Layout: Title on Left, Timeline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md exp-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
                <Cpu className="w-3.5 h-3.5 text-green-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">System.Logs</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none exp-animate opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out">
                My <br />
                <span className="text-zinc-600">Journey &</span> <br />
                <span>Builds</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm exp-animate opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out">
              A record of professional production roles, standalone projects, and core system architectures deployed into the wild.
            </p>
          </div>

          {/* Right Scrolling Timeline Column */}
          <div className="lg:col-span-8 relative pl-6 md:pl-10">
            {/* Minimal High-End Timeline Track */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-green-500/40 via-white/10 to-transparent" />

            <div className="flex flex-col gap-12">
              {experiences.map((exp, i) => (
                <div
                  key={exp.id}
                  className="relative group exp-animate opacity-0 translate-y-8 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${i * 120 + 100}ms` }}
                >
                  {/* Timeline Intersection Node */}
                  <div className="absolute -left-[30px] md:-left-[46px] top-6 z-20">
                    <div className={`relative w-3 h-3 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-green-400 transition-colors duration-300 flex items-center justify-center`}>
                      <div className="absolute w-2 h-2 rounded-full bg-green-400 scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Glassmorphic Experience Card */}
                  <div 
                    className="relative bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-white/10 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 ease-out"
                    style={{
                      boxShadow: `0 10px 30px -15px rgba(0,0,0,0.3)`
                    }}
                  >
                    {/* Glowing Accent Ring on Hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 20px 0 ${exp.accentGlow}`
                      }}
                    />

                    {/* Meta Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        {/* Icon Container */}
                        <div className={`w-12 h-12 rounded-xl border ${exp.accentSoft} ${exp.accentText} flex items-center justify-center relative shrink-0`}>
                          {exp.icon}
                        </div>
                        <div>
                          <span className={`text-[10px] font-mono uppercase tracking-[0.3em] ${exp.accentText} mb-0.5 block`}>
                            {exp.type}
                          </span>
                          <h3 className="text-2xl font-bold text-white tracking-tight leading-none">
                            {exp.role}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Interactive Target Link */}
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                          {exp.company}
                        </span>
                        <div className={`p-1.5 rounded-lg border ${exp.accentSoft} ${exp.accentText} opacity-40 group-hover:opacity-100 transition-all duration-300`}>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Core Description */}
                    <p className="text-zinc-400 text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Interactive Metadata Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-3 py-1 rounded-md border font-mono tracking-wide ${exp.accentSoft} ${exp.accentText} bg-white/[0.01]`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .exp-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </section>
  );
}