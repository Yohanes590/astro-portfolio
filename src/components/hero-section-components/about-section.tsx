import React, { useEffect, useRef } from 'react';
import { Disc3, MapPin, Target } from 'lucide-react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative bg-[#020202] py-16 md:py-24 lg:py-32 overflow-hidden group/section"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:60px_60px] pointer-events-none" />
      
      {/* Ambient haze */}
      <div className="absolute -left-1/4 top-0 w-[300px] sm:w-[800px] h-full bg-green-950/[0.15] blur-[100px] sm:blur-[160px] rounded-full pointer-events-none" />

      {/* Cinematic Integrated Image (Hidden on mobile/tablet to avoid overlapping text, beautifully rendered on desktop) */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-[45%] lg:w-[50%] z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/30 to-black z-20" />
        
        {/* Dynamic glare on hover */}
        <div className="absolute inset-0 z-20 opacity-0 group-hover/section:opacity-100 transition-opacity duration-[1.5s] pointer-events-none">
          <div className="absolute top-1/3 -right-20 w-[300px] h-[300px] bg-green-500/20 blur-[130px] rounded-full rotate-12 transform group-hover/section:translate-y-[-20px] transition-transform duration-[2s] ease-out" />
          <div className="absolute bottom-1/4 -right-10 w-[200px] h-[200px] bg-emerald-500/10 blur-[100px] rounded-full group-hover/section:translate-y-[15px] transition-transform duration-[2s] ease-out" />
        </div>

        <img
          src="/avater.png"
          alt="Yohanes Mulugeta (JO)"
          className="relative h-[105%] w-auto max-w-none top-[5.5%] object-contain object-right-bottom z-10 transition-transform duration-[2.5s] ease-out scale-100 group-hover/section:scale-[1.03] opacity-80 group-hover/section:opacity-100"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-30">
        
        {/* Editorial Bio Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="md:col-span-12 lg:col-span-8 space-y-8 md:space-y-12 about-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            
            {/* Title Block */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] text-green-500/70">identity // v1.0</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-tighter text-white leading-[0.95] md:leading-[0.9] uppercase font-sans">
                BUILDING DIGITAL <span className="text-zinc-700">EXPERIENCES</span>
              </h2>
            </div>

            {/* Editorial Bio */}
            <div className="space-y-4 sm:space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl">
              <p>
                My name is <span className="text-white font-semibold">Yohanes Mulugeta</span>, known digitally as <span className="text-green-400 font-mono">@jo</span>. I am a highly motivated full-stack engineer and designer focused on engineering production-ready code, scalable database architectures, and secure platforms from <span className="text-white font-medium">Ethiopia</span>.
              </p>
              
              <p className="text-zinc-400">
                I specialize in robust end-to-end architectures, leveraging Next.js, TypeScript, Node.js, and Express. I enjoy automating security pipelines, optimizing database performance, and crafting premium, user-centric interfaces designed to solve real-world problems.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Meta Section */}
        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/5 about-animate opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <div className="p-2.5 rounded-lg bg-green-500/5 border border-green-500/10">
                <MapPin className="w-5 h-5 text-green-500/70" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">LOCATION</p>
                <p className="text-sm text-zinc-100 font-medium leading-tight">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            {/* Specialization */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <div className="p-2.5 rounded-lg bg-green-500/5 border border-green-500/10">
                <Target className="w-5 h-5 text-green-500/70" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">SPECIALIZATION</p>
                <p className="text-sm text-zinc-100 font-medium leading-tight">Fintech, AI, SaaS</p>
              </div>
            </div>

            {/* Availability (Spans full grid width on mobile sizes to stay centered/even) */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] sm:col-span-2 lg:col-span-1">
              <div className="p-2.5 rounded-lg bg-green-500/5 border border-green-500/10 relative">
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <Disc3 className="w-5 h-5 text-green-500/70" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">AVAILABILITY</p>
                <p className="text-xs text-green-400 font-bold tracking-wide uppercase leading-tight">OPEN FOR NEW PROJECTS</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .about-visible {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }
      `}</style>
    </section>
  );
}