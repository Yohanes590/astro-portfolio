import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

// --- Custom Icons (Prevents library export errors) ---
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

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full backdrop-blur-lg z-50 transition-all duration-300 ${scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-green-500/20 py-3'
            : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo Section */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/30 group-hover:border-green-500/60 transition-all shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                        <Shield className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-white font-bold text-xl tracking-tighter">
                        JO<span className="text-green-500">.</span>DEV
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.href.startsWith('#')) {
                                        e.preventDefault();
                                        const target = document.querySelector(link.href);
                                        if (target) {
                                            target.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }
                                }}
                                className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-green-500 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Socials & CTA */}
                    <div className="flex items-center gap-5 border-l border-zinc-800 pl-8">
                        <a href="https://github.com/yohanes590" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-500 transition-all hover:scale-110">
                            <GithubIcon className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/yohanes-mulugeta21/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-500 transition-all hover:scale-110">
                            <LinkedinIcon className="w-5 h-5" />
                        </a>
                        <button className="px-6 py-2.5 bg-green-500/10 border border-green-500/50 text-green-500 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                            Resume
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-400 hover:text-green-500 transition-colors">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-green-500/20 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="p-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-bold text-zinc-300 hover:text-green-500 transition-colors"
                            onClick={(e) => {
                                setIsOpen(false);
                                if (link.href.startsWith('#')) {
                                    e.preventDefault();
                                    const target = document.querySelector(link.href);
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-6 pt-4 border-t border-zinc-800">
                        <GithubIcon className="w-6 h-6 text-zinc-400" />
                        <LinkedinIcon className="w-6 h-6 text-zinc-400" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;