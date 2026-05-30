import React, { useEffect, useRef } from 'react';
import { Code2, Server, Layers, Cpu, Terminal, GitBranch, AstroidIcon, DatabaseIcon, AtomIcon } from 'lucide-react';

const techStack = [
  { label: 'React', icon: <AtomIcon className="w-3.5 h-3.5" /> },
  { label: 'Next.js', icon: <Layers className="w-3.5 h-3.5" /> },
  { label: 'TypeScript', icon: <Terminal className="w-3.5 h-3.5" /> },
  { label: 'Node.js', icon: <Server className="w-3.5 h-3.5" /> },
  { label: 'Express.js', icon: <Server className="w-3.5 h-3.5" /> },
  { label: 'Tailwind CSS', icon: <Cpu className="w-3.5 h-3.5" /> },
  { label: 'Astro', icon: <AstroidIcon className="w-3.5 h-3.5" /> },
  { label: 'Git', icon: <GitBranch className="w-3.5 h-3.5" /> },
  { label: 'Linux', icon: <Terminal className="w-3.5 h-3.5" /> },
  { label: 'PostgreSQL', icon: <DatabaseIcon className="w-3.5 h-3.5" /> },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.about-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#050505] py-28 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-8 about-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-green-500">About Me</span>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 about-animate opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out">
          About <span className="text-zinc-700">Me</span>
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl mb-16 about-animate opacity-0 translate-y-6 transition-all duration-700 delay-150 ease-out">
          Building modern digital experiences with{' '}
          <span className="text-green-400 font-medium">clean code</span>,{' '}
          <span className="text-green-400 font-medium">scalable systems</span>, and{' '}
          <span className="text-green-400 font-medium">creative problem-solving</span>.
        </p>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Profile Card — left */}
          <div
            ref={cardRef}
            className="lg:col-span-2 about-animate opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out"
          >
            <div className="relative group rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm overflow-hidden p-8">
              {/* Corner glow on hover */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-green-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Avatar / initials */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-600/10 border border-green-500/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-green-400 font-mono">Jo</span>
                </div>
                {/* Online dot */}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-900 animate-pulse" />
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-1">Yohanes Mulugeta</h3>
              <p className="text-green-400 text-sm font-mono mb-1">@jo · Full Stack Developer</p>
              <p className="text-zinc-500 text-sm mb-6">📍 Ethiopia</p>

              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Available for new projects</span>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5">
                {[
                  { value: '3+', label: 'Years Exp' },
                  { value: '10+', label: 'Projects' },
                  { value: '100%', label: 'Passion' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio + tech stack — right */}
          <div ref={contentRef} className="lg:col-span-3 flex flex-col gap-8">
            {/* Bio text */}
            <div className="about-animate opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-8 space-y-4">
                <p className="text-zinc-300 text-base leading-relaxed">
                  My name is <span className="text-white font-semibold">Yohanes Mulugeta</span>, also known as{' '}
                  <span className="text-green-400 font-semibold">Jo</span> — a passionate full-stack developer from{' '}
                  <span className="text-white font-medium">Ethiopia</span> focused on building modern web applications,
                  startup-level systems, and impactful digital products.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed">
                  I specialize in <span className="text-green-400 font-medium">frontend and backend development</span> using
                  technologies like React, Next.js, TypeScript, Node.js, Express, and Tailwind CSS. I enjoy creating{' '}
                  <span className="text-green-400 font-medium">premium user experiences</span>, scalable architectures,
                  and innovative ideas that solve real-world problems.
                </p>
                <p className="text-zinc-500 text-base leading-relaxed">
                  Currently, I'm focused on building ambitious projects including{' '}
                  <span className="text-zinc-300">fintech systems</span>,{' '}
                  <span className="text-zinc-300">AI-powered platforms</span>,{' '}
                  <span className="text-zinc-300">cybersecurity labs</span>, and{' '}
                  <span className="text-zinc-300">modern SaaS products</span> while continuously improving my engineering skills.
                </p>
              </div>
            </div>

            {/* Tech stack */}
            <div className="about-animate opacity-0 translate-y-8 transition-all duration-700 delay-400 ease-out">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-8">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-5">Tech Stack</p>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech, i) => (
                    <span
                      key={tech.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-sm font-medium hover:border-green-500/40 hover:bg-green-500/5 hover:text-green-400 transition-all duration-300 cursor-default group"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <span className="text-green-500/70 group-hover:text-green-400 transition-colors">{tech.icon}</span>
                      {tech.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </section>
  );
}
