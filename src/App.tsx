import { useState, useEffect } from 'react';
import { DemoOne } from '@/components/ui/demo';

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isUxOpen, setIsUxOpen] = useState(false);

  // Stop body scrolling when lightboxes are open
  useEffect(() => {
    if (isVideoOpen || isUxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isVideoOpen, isUxOpen]);

  const ytLinks = [
    'X4w8Ya30cxo',
    'DxYcSx74mNU',
    'dT8V1MHJ1hE',
    'Uc3CKiFgesw',
    '_uVfZKlKs2A',
    'd0SiWn2EML0'
  ];

  const pdfFiles = [
    { name: "Barbershop App - UX Case Study", file: "barbershop-ux-case-study.pdf" },
    { name: "Dynamic Fitness App - UX Case Study", file: "dynamic-fitness-ux-case-study.pdf" },
    { name: "Portfolio Project 1", file: "portfolio-project-1.pdf" }
  ];

  return (
    <div className="bg-[#0D0D12] min-h-screen text-[#F5F5F7] selection:bg-[#F97316] selection:text-white antialiased font-sans">

      {/* Top Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl bg-[#15151A]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex justify-between items-center mix-blend-difference">
        <div className="font-sans font-bold text-xl tracking-tighter uppercase">Idris Bakare.</div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-[#888891]">
          <a href="#work" className="hover-target hover:text-white transition-colors">Archive</a>
          <a href="#about" className="hover-target hover:text-white transition-colors">Manifesto</a>
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/idrisbakare/" target="_blank" rel="noreferrer"
            className="hover-target text-xs font-bold uppercase tracking-widest border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors">LinkedIn</a>
          <a href="https://www.upwork.com/freelancers/~019206011393cf6c1b" target="_blank" rel="noreferrer"
            className="hover-target text-xs font-bold uppercase tracking-widest bg-white text-black px-4 py-2 rounded-full hover:bg-[#F97316] hover:text-white transition-colors">Upwork</a>
        </div>
      </nav>

      {/* Horizon Hero */}
      <DemoOne />

      {/* Ticker Marquee */}
      <div className="w-full overflow-hidden mt-20">
        <div className="ticker-wrap shadow-2xl bg-[#F97316]">
          <div className="ticker-content pt-1 flex items-center gap-8 py-3 w-max animate-[ticker_30s_linear_infinite]">
            <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-black">AI CONSULTANT</div>
            <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-black">✦</div>
            <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-black">CREATIVE TECHNOLOGIST</div>
            <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-black">✦</div>
            <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-black">FRONT END DEVELOPMENT</div>
            <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-black">✦</div>
            <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-black">BRAND STRATEGIST</div>
            <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-black">✦</div>
          </div>
        </div>
      </div>

      <div className="content-layer relative z-10 w-full overflow-hidden">

        {/* Radical Hero */}
        <section className="min-h-[110vh] flex flex-col justify-center px-6 md:px-12 relative pt-32">
          <div className="max-w-7xl mx-auto w-full">
            <div className="uppercase tracking-[0.3em] text-[#F97316] font-bold text-xs mb-8 reveal hover-target">
              Idris Bakare // Profile
            </div>
            <h1 className="font-sans font-black text-[12vw] leading-[0.85] tracking-tighter uppercase reveal-up">
              Creative <br />
              <span className="font-serif italic text-outline lowercase relative left-[10%] group hover-target">
                Technologist
              </span>
            </h1>
            <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 reveal">
              <div className="max-w-2xl text-white font-sans text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  <strong className="text-[#F97316]">I engineer digital acceleration.</strong> As an AI Consultant
                  and Front-End Technologist, I specialize in architecting systems that help brands scale
                  faster. My stack merges psychological product design with high-performance React
                  applications.
                </p>
                <p className="text-base text-gray-200">
                  Whether I'm developing a Gemini-powered streaming platform like Nano-Stream, or
                  orchestrating interactive 3D WebGL experiences, my philosophy is simple: push the boundaries
                  of immersive web tech to deliver measurable business logic.
                </p>
              </div>
              <div className="text-left md:text-right mt-12 md:mt-0 font-sans text-sm tracking-widest uppercase text-[#888891] pt-4 md:pt-0">
                Explore The Archive <br />↓
              </div>
            </div>
          </div>
        </section>

        {/* Asymmetrical Project Grid */}
        <section id="work" className="py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif italic text-6xl md:text-8xl mb-24 reveal text-center md:text-left">Selected Index.</h2>

            <div className="space-y-40">
              {/* Project 1 */}
              <div className="project-card flex flex-col md:flex-row gap-12 md:gap-24 items-center reveal hover-target group">
                <div className="w-full md:w-3/5 relative aspect-[4/3] rounded-sm overflow-hidden bg-[#15151A]">
                  <img src="images/thumb_ui_ux.png" className="w-full h-full object-cover img-parallax transition-all duration-500" alt="UI/UX" />
                  <div className="absolute inset-0 bg-[#F97316] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="w-full md:w-2/5 md:-ml-16 relative z-10 px-6 md:px-0">
                  <div className="bg-[#15151A]/90 backdrop-blur-md p-8 border border-white/10">
                    <div className="text-xs font-mono text-[#F97316] mb-4 tracking-widest">001 // UI-UX</div>
                    <h3 className="font-sans font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-6">User Interface</h3>
                    <p className="text-[#888891] mb-8">Pinnacle digital product design, merging psychological user-centric research with jaw-dropping, premium interfaces.</p>
                    <button onClick={() => setIsUxOpen(true)} className="inline-block border-b border-[#F97316] pb-1 text-xs uppercase tracking-widest font-bold text-white hover:text-[#F97316] transition-colors hover-target">View Case Studies</button>
                  </div>
                </div>
              </div>

              {/* Project 2 (Front End / GitHub) */}
              <div className="project-card flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-start reveal hover-target group">
                <div className="w-full md:w-3/5 relative aspect-[4/3] rounded-sm overflow-hidden bg-[#15151A]">
                  <img src="images/thumb_websites.png" className="w-full h-full object-cover img-parallax transition-all duration-500" alt="Front End" />
                  <div className="absolute inset-0 bg-blue-500 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="w-full md:w-2/5 md:-mr-16 relative z-10 px-6 md:px-0">
                  <div className="bg-[#15151A]/90 backdrop-blur-md p-8 border border-white/10">
                    <div className="text-xs font-mono text-blue-400 mb-4 tracking-widest flex items-center gap-2">
                      002 // FRONT-END
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <h3 className="font-sans font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-6">Front End Development</h3>
                    <p className="text-[#888891] mb-8">High-performance responsive applications and algorithmic solutions. Code architecture pushed live via GitHub.</p>

                    <div className="space-y-4 mb-8 flex flex-col">
                      <a href="/london-estate" target="_blank" rel="noreferrer" className="block group/repo border border-white/5 p-4 bg-white/5 hover:bg-blue-500/10 transition-colors">
                        <div className="font-mono text-sm text-white group-hover/repo:text-blue-400 transition-colors flex justify-between">
                          Vanguard Estates
                          <span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded-full ml-auto">LIVE</span>
                        </div>
                      </a>
                      <a href="https://github.com/Idris-Michael/Nano-Stream" target="_blank" rel="noreferrer" className="block group/repo border border-white/5 p-4 bg-white/5 hover:bg-blue-500/10 transition-colors">
                        <div className="font-mono text-sm text-white group-hover/repo:text-blue-400 transition-colors flex justify-between">
                          Idris-Michael/Nano-Stream
                        </div>
                      </a>
                      <a href="/logoisum/dist/index.html" target="_blank" rel="noreferrer" className="block group/repo border border-white/5 p-4 bg-white/5 hover:bg-blue-500/10 transition-colors">
                        <div className="font-mono text-sm text-white group-hover/repo:text-blue-400 transition-colors flex justify-between">
                          Logoisum Premium Hero Element
                        </div>
                      </a>
                    </div>
                    <a href="https://github.com/Idris-Michael" target="_blank" className="inline-flex items-center gap-2 border-b border-blue-400 pb-1 text-xs uppercase tracking-widest font-bold hover:text-blue-400 transition-colors hover-target">
                      View GitHub Profile ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card flex flex-col md:flex-row gap-12 md:gap-24 items-center reveal hover-target group">
                <div className="w-full md:w-3/5 relative aspect-[16/9] rounded-sm overflow-hidden bg-[#15151A]">
                  <img src="images/thumb_video.png" className="w-full h-full object-cover img-parallax transition-all duration-500" alt="Video Edits" />
                  <div className="absolute inset-0 bg-purple-500 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="w-full md:w-2/5 md:-ml-16 relative z-10 px-6 md:px-0">
                  <div className="bg-[#15151A]/90 backdrop-blur-md p-8 border border-white/10">
                    <div className="text-xs font-mono text-purple-400 mb-4 tracking-widest">003 // MEDIA</div>
                    <h3 className="font-sans font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-6">AI Video Edits</h3>
                    <p className="text-[#888891] mb-8">Director-level video editing enhanced by generative AI—transforming simple concepts into Hollywood-grade visual narratives.</p>
                    <button onClick={() => setIsVideoOpen(true)} className="inline-block border-b border-purple-400 pb-1 text-xs uppercase tracking-widest font-bold text-white hover:text-purple-400 transition-colors hover-target">Play Reel</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Live Builds Carousel */}
        <section id="live-builds" className="py-24 px-6 md:px-12 overflow-hidden border-t border-white/5 bg-[#15151A]/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal gap-6">
              <div>
                <div className="uppercase tracking-[0.3em] text-blue-400 font-bold text-xs mb-4">Open Source Repositories</div>
                <h2 className="font-serif italic text-4xl md:text-6xl text-white">Live Builds.</h2>
              </div>
              <a href="https://github.com/Idris-Michael" target="_blank" className="border-b border-white/30 pb-1 text-xs uppercase tracking-widest font-bold text-white hover:text-blue-400 hover:border-blue-400 transition-colors pb-2 hover-target">
                View GitHub ↗
              </a>
            </div>

            <div className="relative w-full reveal-up">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 pb-12">

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white bg-blue-500 px-3 py-1 rounded-full shadow-lg pointer-events-none">LIVE</div>
                    <img src="images/repo-vanguard.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Vanguard Estates" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Real Estate | 3D WebGL</div>
                      <span className="text-xs font-mono text-blue-400">001</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Vanguard Estates</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Cinematic 1:1 pixel-perfect luxury real estate experience featuring GSAP scrolling, React 3D Fiber architectural elements, and tailored brand aesthetics.</p>
                    <div className="flex gap-4">
                      <a href="/london-estate" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-blue-500 hover:border-blue-500 transition-colors">Launch Demo</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black">
                    <img src="images/repo-nano-hero.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Nano-Stream" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Generative AI | React 19</div>
                      <span className="text-xs font-mono text-blue-400">002</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Nano-Stream AI</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Experimental AI-Generative Interface built with React 19, Three.js, and Google GenAI. Next-generation streaming platform with a cyberpunk UI.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/Nano-Stream" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <img src="images/repo-particles.png" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Motion Particles" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Hand Gestures | React</div>
                      <span className="text-xs font-mono text-blue-400">003</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Severus Motion Particles</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Interactive 3D particle experience controlled directly by human hand gestures via computer vision. State-of-the-art interactive UI.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/Severus-Motion-Particles" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <img src="images/repo-nexus.png" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Nexus Smart Building" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">IoT Dashboard | Visual Data</div>
                      <span className="text-xs font-mono text-blue-400">004</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Nexus Smart Building</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Smart architecture control interface and digital twin dashboard. Merges sensor data streams with an intuitive command and control center.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/Nexus-Smart-Building" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <img src="images/repo-logoisum.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Logoisum Video Editing Agency" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Premium UI | Tailwind</div>
                      <span className="text-xs font-mono text-blue-400">005</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Logoisum Premium Hero</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Minimal, ultra-modern video editing agency hero section. Includes a cinematic full-screen video background, slick floating navigation, and sharp typography built seamlessly with native Tailwind configurations.</p>
                    <div className="flex gap-4">
                      <a href="/logoisum/dist/index.html" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-blue-500 hover:border-blue-500 transition-colors">Launch Demo</a>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between bg-[#15151A] p-6 border border-white/10 hover-target transition-all hover:border-blue-500/50 group">
                  <div className="w-full aspect-video rounded-sm overflow-hidden mb-6 bg-black relative">
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white bg-blue-500 px-3 py-1 rounded-full shadow-lg pointer-events-none">NEW</div>
                    <img src="images/repo-overwatch.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Severus Overwatch Dashboard" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Real-time Map | React 19</div>
                      <span className="text-xs font-mono text-blue-400">006</span>
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Severus Overwatch</h3>
                    <p className="text-[#888891] text-sm leading-relaxed mb-6">Real-time aerial and ground surveillance dashboard featuring flight tracking, live TfL jam cams, and geographic disruption alerts using MapLibre, React, and Tailwind.</p>
                    <div className="flex gap-4">
                      <a href="https://github.com/Idris-Michael/severus-overwatch" target="_blank" className="text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Source</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Interactive Guides Carousel */}
        <section id="guides" className="py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal gap-6">
              <div>
                <div className="uppercase tracking-[0.3em] text-[#F97316] font-bold text-xs mb-4">Interactive Directory</div>
                <h2 className="font-serif italic text-4xl md:text-6xl text-white">London Coffee.</h2>
              </div>
              <a href="https://cedar-187.faces.site/fa30p8mk6v1j" target="_blank" className="border-b border-white/30 pb-1 text-xs uppercase tracking-widest font-bold text-white hover:text-[#F97316] hover:border-[#F97316] transition-colors pb-2 hover-target">
                View Live Map ↗
              </a>
            </div>

            <div className="relative w-full reveal-up">
              <div className="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">☕️</div>
                      <span className="text-xs font-mono text-[#F97316]">001</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Covent Garden</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Monmouth Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">One of London's most revered independent roasters. Expect perfectly pulled espresso, single-origin pourover, and a queue that's always worth the wait.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Specialty Coffee</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">☕️</div>
                      <span className="text-xs font-mono text-[#F97316]">002</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Fitzrovia</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Attendant Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Tucked into a beautifully converted Victorian underground toilet. Exceptional flat whites and a cosy, characterful atmosphere unlike anywhere else.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Specialty Coffee</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">🏢</div>
                      <span className="text-xs font-mono text-[#F97316]">003</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Soho</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Department of Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">A Soho staple with serious beans, great food, and a relaxed buzz. Perfect for a morning meeting or solo work session with outstanding brews.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Café</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">🎵</div>
                      <span className="text-xs font-mono text-[#F97316]">004</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Oxford Street</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Notes Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Specialty coffee by day, wine bar by night. A sophisticated spot with direct-trade beans and a beautiful storefront that's perfect for people watching.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Specialty Coffee</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">☀️</div>
                      <span className="text-xs font-mono text-[#F97316]">005</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Fitzrovia</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Kaffeine</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Widely considered one of the leading coffee shops in London, Kaffeine brings an Australian-style devotion to quality, speed, and hospitality.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Australian-Style</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">⚡️</div>
                      <span className="text-xs font-mono text-[#F97316]">006</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Soho</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Nude Espresso</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Artisan coffee roasters since 2008. Their Soho shop is a minimalist haven for coffee purists, focusing on ethical sourcing and brewing precision.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Roastery Café</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">🎖</div>
                      <span className="text-xs font-mono text-[#F97316]">007</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Holborn</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Prufrock Coffee</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">A multi-award-winning café and training hub. Co-founded by a former World Barista Champion, an absolute destination for espresso lovers.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Specialty Coffee</div>
                </div>

                <div className="snap-start shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#15151A] p-8 border border-white/10 hover-target transition-all hover:border-[#F97316]/50 group">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl bg-white/5 group-hover:bg-[#F97316]/10 transition-colors">🥐</div>
                      <span className="text-xs font-mono text-[#F97316]">008</span>
                    </div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Marylebone</div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">Gail's Bakery</h3>
                    <p className="text-[#888891] text-sm leading-relaxed">Beyond the legendary sourdough and cinnamon buns, Gail's serves a curated selection of house-blend coffee in a bright, bustling setting.</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">Bakery Café</div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Bottom Ticker */}
        <div className="w-full overflow-hidden mt-12 bg-[#F5F5F7] z-20 relative">
          <div className="ticker-wrap bottom shadow-2xl skew-y-2 py-3">
            <div className="ticker-content pt-1 flex gap-8 items-center w-max animate-[ticker_30s_linear_infinite]">
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">OPEN FOR COMMISSIONS</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">BREAK THE MATRIX</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">OPEN FOR COMMISSIONS</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">BREAK THE MATRIX</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">OPEN FOR COMMISSIONS</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">BREAK THE MATRIX</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">OPEN FOR COMMISSIONS</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">BREAK THE MATRIX</div>
              <div className="ticker-item font-sans font-bold text-xl uppercase tracking-widest text-[#0D0D12]">●</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 text-center reveal">
          <h2 className="font-sans font-black text-5xl md:text-[8vw] uppercase tracking-tighter leading-none mb-12 hover-target">
            Initialize <br />
            <span className="font-serif italic text-outline lowercase text-[#F97316]">Sequence.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 w-full max-w-2xl mx-auto px-4">
            <a href="mailto:idris.bakare92@outlook.com" className="w-full md:w-auto hover-target inline-block bg-white text-black font-bold uppercase tracking-widest px-12 py-6 rounded-full text-lg hover:bg-[#F97316] hover:text-white transition-colors duration-300">
              Send Signal
            </a>
            <a href="https://snazer.gumroad.com/l/ftimbb" target="_blank" className="w-full md:w-auto hover-target inline-flex items-center justify-center gap-3 border border-white/20 bg-[#15151A]/50 backdrop-blur-md text-white font-bold uppercase tracking-widest px-12 py-6 rounded-full text-lg hover:border-[#F97316] hover:text-[#F97316] transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-current stroke-2">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Free Digital Guide
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 flex justify-between items-center border-t border-white/10 text-xs text-[#888891] font-mono uppercase tracking-widest">
          <div>© 2026 Idris Bakare</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            System Nominal
          </div>
        </footer>

      </div>

      {/* Cinematic Video Lightbox */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0D0D12]/98 backdrop-blur-3xl overflow-y-auto w-full transition-opacity duration-500 animate-in fade-in">
          <div className="min-h-screen flex flex-col items-center py-24 px-6 md:px-12 relative w-full">
            <button onClick={() => setIsVideoOpen(false)} className="fixed top-8 right-8 z-[110] text-white hover:text-purple-400 font-sans font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-colors hover-target">
              [CLOSE]
            </button>
            <div className="w-full max-w-4xl mx-auto">
              <h2 className="font-serif italic text-4xl md:text-6xl text-white mb-16 text-center border-b border-white/10 pb-8">Video Archive.</h2>
              <div className="space-y-32">
                {ytLinks.map((id, index) => (
                  <div key={id} className="video-wrapper w-full relative aspect-video bg-black rounded-sm border border-white/10 shadow-2xl overflow-hidden reveal-video animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}>
                    <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white/50 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">SEQ // 00{index + 1}</div>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`} title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 z-0 border-0"></iframe>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cinematic UX Slide Viewer Lightbox */}
      {isUxOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0D0D12]/98 backdrop-blur-3xl overflow-y-auto w-full transition-opacity duration-500 animate-in fade-in">
          <div className="min-h-screen flex flex-col items-center py-24 px-6 md:px-12 relative w-full">
            <button onClick={() => setIsUxOpen(false)} className="fixed top-8 right-8 z-[110] text-white hover:text-[#F97316] font-sans font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-colors hover-target">
              [CLOSE]
            </button>
            <div className="w-full max-w-6xl mx-auto">
              <h2 className="font-serif italic text-4xl md:text-6xl text-white mb-16 text-center border-b border-white/10 pb-8">UX Case Studies.</h2>
              <div className="space-y-32">
                {pdfFiles.map((pdf, index) => (
                  <div key={pdf.name} className="reveal-ux animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}>
                    <h4 className="font-sans font-bold text-xl uppercase tracking-widest text-[#F97316] mb-6">00{index + 1} // {pdf.name}</h4>
                    <div className="w-full relative aspect-[4/3] md:aspect-[16/9] bg-white/5 rounded-sm border border-white/10 shadow-2xl p-2">
                      <iframe src={pdf.file} className="w-full h-full rounded-sm border-0" title={pdf.name}></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
