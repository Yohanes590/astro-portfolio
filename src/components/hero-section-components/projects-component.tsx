import React, { useEffect, useRef } from 'react';
import { Shield, CreditCard, ShoppingBag, ArrowUpRight, Cpu, Lock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const ProjectsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);

    const projects = [
        {
            id: "yegna-pay",
            title: "Yegna Pay",
            tagline: "Payment Infrastructure",
            desc: "Architecting a developer-first gateway for Ethiopia. Automating verification via AI fraud analysis and robust webhook systems.",
            icon: <CreditCard className="w-6 h-6" />,
            tech: ["Next.js", "PostgreSQL", "Redis", "Webhooks"],
            className: "md:col-span-2 md:row-span-2",
            accent: "from-green-500/20 to-emerald-900/20",
            borderAccent: "group-hover:border-green-500/50",
            image: "/yegna-pay.jpg",
        },
        {
            id: "cyber-lab",
            title: "Cyber Lab",
            tagline: "Security Sandbox",
            desc: "Containerized assessment platform for testing SQLi, XSS, and JWT vulnerabilities in isolated environments.",
            icon: <Shield className="w-6 h-6" />,
            tech: ["Docker", "Go", "Sandboxing"],
            className: "md:col-span-1 md:row-span-1",
            accent: "from-cyan-500/20 to-blue-900/20",
            borderAccent: "group-hover:border-cyan-500/50",
            image: "/cyber-lab.png",
        },
        {
            id: "ayne-awaj",
            title: "Ayne Awaj",
            tagline: "Luxury E-Commerce",
            desc: "Premium footwear engine optimized for TikTok traffic with automated Telegram order fulfillment.",
            icon: <ShoppingBag className="w-6 h-6" />,
            tech: ["Framer Motion", "Tailwind", "Telegram API"],
            className: "md:col-span-1 md:row-span-1",
            accent: "from-amber-500/20 to-orange-900/20",
            borderAccent: "group-hover:border-amber-500/50",
            image: "/ayn-awaj.jpg",
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Header Reveal
            gsap.fromTo(headerRef.current, 
                { y: 50, opacity: 0 }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Staggered Cards Reveal
            cardsRef.current.forEach((card, index) => {
                if (!card) return;
                gsap.fromTo(card,
                    { y: 100, opacity: 0, scale: 0.95 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.2)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        },
                        delay: index * 0.15
                    }
                );
            });
            
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="bg-[#020202] py-32 relative overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div ref={headerRef} className="mb-24 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                        <Cpu className="w-4 h-4 text-green-400" />
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-green-400 font-bold">System_Deployment.v2</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">Projects</span>
                    </h2>
                    <p className="max-w-2xl text-zinc-400 text-lg md:text-xl font-light">
                        Explore the cutting-edge systems and infrastructure I've built to scale businesses and enhance security.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {projects.map((p, index) => (
                        <a 
                            href={`/portfolio/${p.id}`} 
                            key={p.id}
                            ref={el => { cardsRef.current[index] = el; }}
                            className={`group relative flex flex-col justify-between p-1 rounded-3xl overflow-hidden bg-zinc-900/40 border border-white/10 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 ${p.className} ${p.borderAccent}`}
                        >
                            {/* Inner Background Gradient & Image Reveal */}
                            <div className="absolute inset-0 z-0">
                                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-5 md:opacity-0 group-hover:opacity-30 transition-all duration-700 scale-105 group-hover:scale-100" />
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-black/50 border border-white/10 rounded-2xl backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                                        {p.icon}
                                    </div>
                                    <div className="w-10 h-10 flex flex-col relative overflow-hidden items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white text-white group-hover:text-black transition-all duration-500">
                                        <ArrowUpRight className="w-5 h-5 absolute group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500" />
                                        <ArrowUpRight className="w-5 h-5 absolute -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                                    </div>
                                </div>

                                <div className="mb-6 flex-grow">
                                    <span className="text-green-400 font-mono text-[10px] uppercase tracking-widest font-bold block mb-2">{p.tagline}</span>
                                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 group-hover:text-green-400 transition-colors duration-300">{p.title}</h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-300">
                                        {p.desc}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {p.tech.map((t) => (
                                            <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-zinc-300 font-mono font-medium group-hover:border-white/20 transition-colors duration-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}

                    {/* Contact / More Projects Tile */}
                    <div 
                        ref={el => { cardsRef.current[ projects.length ] = el; }}
                        className="md:col-span-1 md:row-span-1 group relative flex flex-col items-center justify-center p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 hover:border-green-500/50 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_8s_infinite] pointer-events-none" />
                        <Lock className="w-10 h-10 text-zinc-600 group-hover:text-green-500 mb-6 transition-colors duration-500" />
                        <h3 className="text-xl font-bold text-white mb-2">Want to see more?</h3>
                        <p className="text-zinc-500 text-center text-sm font-light mb-8">Access restricted to authorized personnel.</p>
                        <button className="relative overflow-hidden px-8 py-3 rounded-full bg-white text-black font-bold tracking-tight group-hover:bg-green-500 transition-colors duration-300">
                            <span className="relative z-10">Request Access</span>
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </section>
    );
};

export default ProjectsSection;