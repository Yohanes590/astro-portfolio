import SplitText from "../SplitText"
export default function LadingComponent() {
    return (<>
        <div className="main-container relative min-h-screen w-full flex justify-center items-center overflow-hidden">
            {/* Subtle Background Glow for Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="main-content z-10 px-6 max-w-5xl">
                <div className="text-headers text-center flex flex-col gap-4">

                    {/* Intro Badge - Professional touch */}
                    <div className="flex justify-center mb-2">
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-green-400 tracking-wide uppercase">
                            Available for new projects
                        </span>
                    </div>

                    <SplitText
                        text="Hi, I'm Yohanes Mulugeta"
                        className="text-lg md:text-xl font-medium text-zinc-400"
                        delay={30}
                        duration={0.8}
                        ease="power4.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 20 }}
                        to={{ opacity: 1, y: 0 }}
                    />

                    <div className="text-2 mt-2">
                        <SplitText
                            text="Full Stack Developer & System Builder"
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                            delay={150}
                            duration={1.2}
                            ease="power4.out"
                            splitType="words"
                            from={{ opacity: 0, y: 50 }}
                            to={{ opacity: 1, y: 0 }}
                        />
                    </div>

                    <div className="text-3 mt-6 max-w-2xl mx-auto">
                        <SplitText
                            text="I design and build intelligent web applications, from SaaS platforms to AI-driven tools and secure payment systems."
                            className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed"
                            delay={300}
                            duration={1}
                            ease="power3.out"
                            splitType="words"
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                        />
                    </div>

                    {/* Professional Call to Action Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 fill-mode-both">
                        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
                            View Projects
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                            Get in Touch
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </>)
}