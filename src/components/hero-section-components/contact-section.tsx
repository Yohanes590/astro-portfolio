import React, { useEffect, useRef, useState } from 'react';
import { Phone, CheckCheck, Copy, ExternalLink, Cpu, Mail } from 'lucide-react';

// Custom SVGs for icons not available in this lucide-react version
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contacts = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@mrx_man21',
    href: 'https://instagram.com/mrx_man21',
    icon: <InstagramIcon className="w-6 h-6" />,
    description: 'Follow my visual journey',
    accent: 'from-pink-500 to-purple-600',
    accentSoft: 'border-pink-500/20 bg-pink-500/5',
    accentText: 'text-pink-400',
    accentGlow: 'bg-pink-500',
    copyable: false,
  },
  {
    id: 'github',
    platform: 'GitHub',
    handle: 'yohanes590',
    href: 'https://github.com/yohanes590',
    icon: <GithubIcon className="w-6 h-6" />,
    description: 'Explore my open source work',
    accent: 'from-white/20 to-zinc-400',
    accentSoft: 'border-white/20 bg-white/5',
    accentText: 'text-zinc-300',
    accentGlow: 'bg-white',
    copyable: false,
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'yohanes-mulugeta21',
    href: 'https://www.linkedin.com/in/yohanes-mulugeta21/',
    icon: <LinkedinIcon className="w-6 h-6" />,
    description: 'Connect professionally',
    accent: 'from-blue-500 to-indigo-600',
    accentSoft: 'border-blue-500/20 bg-blue-500/5',
    accentText: 'text-blue-400',
    accentGlow: 'bg-blue-500',
    copyable: false,
  },
  {
    id: 'phone',
    platform: 'Phone',
    handle: '+251 962 579 755',
    href: 'tel:+251962579755',
    icon: <Phone className="w-6 h-6" />,
    description: 'Call or message me directly',
    accent: 'from-green-500 to-emerald-400',
    accentSoft: 'border-green-500/20 bg-green-500/5',
    accentText: 'text-green-400',
    accentGlow: 'bg-green-500',
    copyable: true,
    copyValue: '+251962579755',
  },
];

function ContactCard({
  contact,
  delay,
}: {
  contact: (typeof contacts)[0];
  delay: number;
}) {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopy = async (e: React.MouseEvent) => {
    if (!contact.copyable || !contact.copyValue) return;
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(contact.copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpen = () => {
    window.open(contact.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={cardRef}
      className="contact-animate opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        onClick={!contact.copyable ? handleOpen : undefined}
        className={`relative group rounded-3xl border ${contact.accentSoft} bg-zinc-900/40 backdrop-blur-sm p-7 overflow-hidden ${!contact.copyable ? 'cursor-pointer' : ''} hover:border-opacity-60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30`}
      >
        {/* Background gradient glow */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${contact.accent} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

        {/* Top corner glow */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 ${contact.accentGlow} opacity-0 group-hover:opacity-20 blur-[50px] rounded-full transition-opacity duration-700`} />

        <div className="relative z-10">
          {/* Icon + platform row */}
          <div className="flex items-start justify-between mb-5">
            <div className={`p-3 rounded-2xl ${contact.accentSoft} border ${contact.accentText}`}>
              {contact.icon}
            </div>

            {/* Action button */}
            <div className="flex gap-2">
              {contact.copyable && (
                <button
                  onClick={handleCopy}
                  className={`p-2 rounded-full border ${contact.accentSoft} ${contact.accentText} opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110`}
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <CheckCheck className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
              <button
                onClick={handleOpen}
                className={`p-2 rounded-full border ${contact.accentSoft} ${contact.accentText} opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110`}
                title={`Open ${contact.platform}`}
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Platform info */}
          <p className={`text-[10px] font-mono uppercase tracking-[0.3em] ${contact.accentText} mb-1.5`}>
            {contact.platform}
          </p>
          <h3 className="text-xl font-bold text-white tracking-tight mb-1.5">
            {contact.handle}
          </h3>
          <p className="text-zinc-500 text-sm">{contact.description}</p>

          {/* Copied toast */}
          {copied && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-medium whitespace-nowrap">
              <CheckCheck className="w-3.5 h-3.5" />
              Copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact-visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = sectionRef.current?.querySelectorAll('.contact-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#050505] py-28 overflow-hidden"
    >
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Ambient glows */}
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-green-500/[0.05] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-6 contact-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
            <Cpu className="w-3 h-3 text-green-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-green-500">Contact.connect</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 contact-animate opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out">
            Let's <span className="text-zinc-700">Connect</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl contact-animate opacity-0 translate-y-6 transition-all duration-700 delay-150 ease-out">
            Open for <span className="text-green-400 font-medium">collaborations</span>, freelance projects,{' '}
            <span className="text-green-400 font-medium">startup ideas</span>, and innovative opportunities.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contacts.map((contact, i) => (
            <ContactCard key={contact.id} contact={contact} delay={i * 100 + 200} />
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 contact-animate opacity-0 translate-y-8 transition-all duration-700 delay-600 ease-out">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-green-500/10 border border-green-500/20">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">Ready to build something great?</p>
                <p className="text-zinc-500 text-sm">Let's turn ideas into reality together.</p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/yohanes-mulugeta21/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-7 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-400/30 hover:scale-105 text-sm"
            >
              Start a Conversation →
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-zinc-700 text-xs font-mono mt-12 contact-animate opacity-0 translate-y-4 transition-all duration-700 delay-700 ease-out">
          © {new Date().getFullYear()} Yohanes Mulugeta · Crafted with passion from Ethiopia
        </p>
      </div>

      <style>{`
        .contact-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </section>
  );
}
