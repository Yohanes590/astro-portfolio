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
    accentGlow: 'bg-green-500',
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
    accentGlow: 'bg-emerald-500',
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
    accentGlow: 'bg-teal-500',
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
    accentGlow: 'bg-lime-500',
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
      className="relative bg-[#050505] py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-green-500/[0.04] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-6 exp-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
            <Cpu className="w-3 h-3 text-green-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-green-500">Experience.log</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter exp-animate opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out">
            Experience &{' '}
            <span className="text-zinc-700">Projects</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-white/10 to-transparent" />

          <div className="flex flex-col gap-10 pl-16 md:pl-20">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className="relative group exp-animate opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${i * 120 + 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[52px] md:-left-[60px] top-8">
                  <div className={`relative w-10 h-10 rounded-2xl border ${exp.accentSoft} flex items-center justify-center ${exp.accentText} group-hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                    <div className={`absolute inset-0 rounded-2xl ${exp.accentGlow} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
                  </div>
                </div>

                {/* Card */}
                <div className="relative rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-8 overflow-hidden group-hover:border-white/20 transition-all duration-500">

                  {/* Hover gradient border glow */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}>
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${exp.accent} opacity-[0.04]`} />
                  </div>

                  {/* Corner glow */}
                  <div className={`absolute -top-12 -right-12 w-40 h-40 ${exp.accentGlow} opacity-0 group-hover:opacity-15 blur-[60px] transition-opacity duration-700`} />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <span className={`text-[10px] font-mono uppercase tracking-[0.3em] ${exp.accentText} mb-1 block`}>
                          {exp.type}
                        </span>
                        <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-zinc-400 font-medium mt-0.5">  {exp.company}</p>
                      </div>
                      <div className={`flex-shrink-0 p-2 rounded-full border ${exp.accentSoft} ${exp.accentText} opacity-0 group-hover:opacity-100 transition-all duration-300 self-start`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-2xl">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-2.5 py-1 rounded-full border font-mono tracking-wide ${exp.accentSoft} ${exp.accentText}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
