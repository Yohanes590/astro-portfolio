import React from 'react';
// Brand-specific icons from Simple Icons
import { 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiAstro, 
  SiTailwindcss, 
  SiNestjs, 
  SiExpress, 
  SiJsonwebtokens, 
  SiMongodb, 
  SiPrisma, 
  SiVercel, 
  SiCloudflare,
  SiPostgresql
} from 'react-icons/si';

// Brand-specific icons from Font Awesome 6
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma 
} from 'react-icons/fa6';

// Specific helpers for APIs and Mobile
import { TbBrandReactNative } from 'react-icons/tb';
import { AiOutlineApi } from 'react-icons/ai';

const technologyTiers = [
  {
    tier: "The Core",
    description: "Foundational languages for modern development.",
    skills: [
      { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, color: "text-blue-400" },
      { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" />, color: "text-yellow-400" },
    ],
  },
  {
    tier: "Frontend & Meta-Frameworks",
    description: "Building immersive, high-performance user experiences.",
    skills: [
      { name: "React", icon: <FaReact className="w-8 h-8" />, color: "text-sky-400" },
      { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, color: "text-white" },
      { name: "Astro", icon: <SiAstro className="w-8 h-8" />, color: "text-orange-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" />, color: "text-teal-400" },
    ],
  },
  {
    tier: "Backend & Runtime",
    description: "Developing scalable, robust server-side logic.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" />, color: "text-green-500" },
      { name: "NestJS", icon: <SiNestjs className="w-8 h-8" />, color: "text-red-500" },
      { name: "Express.js", icon: <SiExpress className="w-8 h-8" />, color: "text-zinc-300" },
      { name: "REST APIs", icon: <AiOutlineApi className="w-8 h-8" />, color: "text-zinc-400" },
      { name: "JWT", icon: <SiJsonwebtokens className="w-8 h-8" />, color: "text-pink-500" },
    ],
  },
  {
    tier: "Mobile Development",
    description: "Crafting native applications across platforms.",
    skills: [
      { name: "React Native", icon: <TbBrandReactNative className="w-8 h-8" />, color: "text-sky-500" },
      { name: "NativeWind", icon: <SiTailwindcss className="w-8 h-8" />, color: "text-teal-500" },
    ],
  },
  {
    tier: "Database & ORM",
    description: "Managing data persistence and integrity.",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" />, color: "text-blue-500" },
      { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" />, color: "text-green-400" },
      { name: "Prisma", icon: <SiPrisma className="w-8 h-8" />, color: "text-teal-300" },
    ],
  },
  {
    tier: "DevOps & Tools",
    description: "Deployment, version control, and design workflow.",
    skills: [
      { name: "Git", icon: <FaGitAlt className="w-8 h-8" />, color: "text-orange-600" },
      { name: "GitHub", icon: <FaGithub className="w-8 h-8" />, color: "text-white" },
      { name: "Vercel", icon: <SiVercel className="w-8 h-8" />, color: "text-white" },
      { name: "Cloudflare", icon: <SiCloudflare className="w-8 h-8" />, color: "text-orange-400" },
      { name: "Figma", icon: <FaFigma className="w-8 h-8" />, color: "text-purple-400" },
    ],
  },
];

export default function TechUniverse() {
  return (
    <section id="tech-universe" className="relative bg-[#050505] text-white py-32 overflow-hidden font-sans">
      
      {/* Ambient Glows (Static) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-950/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-950/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-green-500">The Technology Universe</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 uppercase leading-tight">
            My <span className="text-zinc-700">Digital</span> Stack
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A curated ecosystem of modern languages, frameworks, and tools I leverage to engineer high-performance applications and immersive digital experiences.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {technologyTiers.map((tier, tierIndex) => (
            <div 
              key={tierIndex}
              className="space-y-8 transition-all duration-700 ease-out"
              style={{ animationDelay: `${150 + tierIndex * 100}ms` }}
            >
              {/* Tier Header */}
              <div className="relative pb-4 border-b border-white/10">
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase">{tier.tier}</h3>
                <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{tier.description}</p>
                <div className="absolute bottom-[-1px] left-0 w-24 h-[2px] bg-green-500/50"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tier.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group relative p-5 rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 hover:border-green-500/30 hover:-translate-y-1 cursor-default overflow-hidden">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-600/0 via-green-600/0 to-green-600/0 group-hover:from-green-600/5 group-hover:via-green-600/5 group-hover:to-green-600/10 transition-all duration-500 pointer-events-none z-0"></div>
                    
                    <div className="flex flex-col items-center gap-4 text-center relative z-10">
                      {/* Icon */}
                      <div className={`text-4xl ${skill.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                        {skill.icon}
                      </div>
                      
                      {/* Name */}
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">{skill.name}</h4>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 group-hover:text-green-500 transition-colors">Expertise</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}