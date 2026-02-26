import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

// 3D Abstract Architecture Element
function AbstractShape() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <MeshDistortMaterial
          color="#CCBCA1"
          envMapIntensity={1}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function App() {
  const heroTextRef = useRef(null);
  const heroSubRef = useRef(null);
  const statementsRef = useRef([]);
  const featuresRef = useRef([]);
  const marqueeRef = useRef(null);
  const intelligenceRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Reveal
      const tl = gsap.timeline();
      tl.fromTo(
        heroTextRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      ).fromTo(
        heroSubRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.8"
      );

      // 2. Parallax Statement
      statementsRef.current.forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });

      // 3. Staggered Features
      gsap.fromTo(featuresRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: {
            trigger: ".feature-grid",
            start: "top 75%"
          }
        }
      );

      // 4. Intelligence Parallax Data
      gsap.fromTo(".data-number",
        { textContent: 0, opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 2, ease: "power2.out", stagger: 0.2,
          scrollTrigger: {
            trigger: ".intelligence",
            start: "top 60%"
          }
        }
      );

      // 5. Endless Marquee GSAP logic
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 15,
        ease: "linear"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="noise-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="app">
        <header className="header">
          <a href="/" className="logo">Vanguard Estates</a>
          <nav className="nav-links">
            <a href="#" className="nav-link">Properties</a>
            <a href="#" className="nav-link">Intelligence</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Journal</a>
          </nav>
          <button className="btn btn-primary" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark)' }}>Book Valuation</button>
        </header>

        <main>
          {/* HERO */}
          <section className="hero">
            <img src="/images/hero.png" alt="London Townhouse" className="hero-bg" />
            <div className="hero-gradient"></div>
            <div className="hero-content">
              <h1 className="headline-xl" ref={heroTextRef} style={{ maxWidth: '1000px', lineHeight: 0.9 }}>
                London's<br /><span style={{ fontStyle: 'italic', fontFamily: 'serif', paddingRight: '1rem', fontWeight: 400 }}>Finest</span> Estates
              </h1>
              <div ref={heroSubRef} style={{ marginTop: '2vw', display: 'flex', gap: '40px', alignItems: 'center' }}>
                <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', opacity: 0.9, maxWidth: '500px' }}>
                  Curating exceptional properties across Belgravia, Mayfair, and Chelsea with architectural precision and uncompromising service.
                </p>
                <button className="btn btn-primary" style={{ padding: '16px 32px', border: '1px solid rgba(255,255,255,0.3)', backgroundColor: 'transparent' }}>
                  Explore Portfolio
                </button>
              </div>
            </div>
          </section>

          {/* PARALLAX BOTTOM HERO META */}
          <div className="hero-bottom-grid">
            <div className="hero-meta-box">
              <span className="meta-text">Est. 2026 / Prime Central</span>
              <p style={{ marginTop: '16px', fontSize: '0.875rem' }}>
                We redefine luxury real estate through a highly analytical, architectural lens.
                Every property in our collection is strictly vetted for design integrity and market value.
              </p>
            </div>
            <div className="hero-meta-box">
              <span className="meta-text">Bespoke Advisory</span>
              <p style={{ marginTop: '16px', fontSize: '0.875rem' }}>
                Our deep market intelligence paired with unparalleled global reach provides
                our clients with an unrivaled advantage in London's upper echelon.
              </p>
            </div>
          </div>

          <section className="statement section-padding">
            <p className="meta-text" style={{ marginBottom: '24px', opacity: 0.5 }}>Our Philosophy</p>
            <h2
              className="headline-l"
              ref={(el) => (statementsRef.current[0] = el)}
              style={{ maxWidth: '900px', margin: '0 auto' }}
            >
              A space is not merely inhabited. <br />
              It is <span style={{ fontStyle: 'italic', fontFamily: 'serif' }}>engineered</span> to resonate with the life it holds.
            </h2>
          </section>

          <section className="feature-grid">
            {[
              { title: "Eaton Square, Belgravia", desc: "A Grade II listed townhouse meticulously restored with contemporary proportions and heritage details.", img: "/images/hero.png" },
              { title: "Grosvenor Sq, Mayfair", desc: "A hyper-modern lateral penthouse with panoramic views of the square, engineered for elegant entertaining.", img: "/images/interior.png" },
              { title: "Cheyne Walk, Chelsea", desc: "Brutalist-lite architectural statement pieces define the interiors of this serene riverside residence.", img: "/images/kitchen.png" }
            ].map((prop, idx) => (
              <div className="feature-card" key={idx} ref={(el) => (featuresRef.current[idx] = el)}>
                <span className="meta-text" style={{ marginBottom: '16px' }}>0{idx + 1} / EXCLUSIVE LISTING</span>
                <div className="feature-image-wrapper">
                  <img src={prop.img} alt={prop.title} className="feature-image" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{prop.title}</h3>
                <p style={{ opacity: 0.7, fontSize: '0.875rem', marginBottom: '24px', flexGrow: 1 }}>{prop.desc}</p>
                <div style={{ paddingBottom: '4px' }}>
                  <a href="#" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500, borderBottom: '1px solid var(--text-dark)' }}>View Specification</a>
                </div>
              </div>
            ))}
          </section>

          <section className="intelligence" ref={intelligenceRef}>
            <div className="intelligence-content">
              <span className="meta-text">Market Intelligence</span>
              <h2 className="headline-l" style={{ margin: '24px 0 16px' }}>Precision Valuation</h2>
              <p style={{ marginBottom: '40px', opacity: 0.8, maxWidth: '500px' }}>
                Our proprietary valuation models ingest thousands of architectural data points, micro-market trends, and global wealth flows to provide the most precise property assessments in Prime Central London.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                  <div className="data-number" style={{ fontSize: '3rem', fontWeight: 300 }}>£3.2B</div>
                  <div className="meta-text">Transactions Volume</div>
                </div>
                <div>
                  <div className="data-number" style={{ fontSize: '3rem', fontWeight: 300 }}>98.2%</div>
                  <div className="meta-text">Asking Price Achieved</div>
                </div>
              </div>
              <div style={{ marginTop: '60px' }}>
                <button className="btn btn-secondary">Request Valuation Report</button>
              </div>
            </div>

            <div className="intelligence-image-wrap">
              <div className="canvas-container">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <Environment preset="city" />
                  <AbstractShape />
                </Canvas>
              </div>
            </div>
          </section>

          <div className="marquee-container">
            <div className="marquee-content" ref={marqueeRef}>
              <span style={{ paddingRight: '40px' }}>BELGRAVIA &bull; MAYFAIR &bull; CHELSEA &bull; NOTTING HILL &bull; KENSINGTON &bull; KNIGHTSBRIDGE &bull; BELGRAVIA &bull; MAYFAIR &bull; CHELSEA &bull; NOTTING HILL &bull; KENSINGTON &bull; KNIGHTSBRIDGE &bull;</span>
              <span style={{ paddingRight: '40px' }}>BELGRAVIA &bull; MAYFAIR &bull; CHELSEA &bull; NOTTING HILL &bull; KENSINGTON &bull; KNIGHTSBRIDGE &bull; BELGRAVIA &bull; MAYFAIR &bull; CHELSEA &bull; NOTTING HILL &bull; KENSINGTON &bull; KNIGHTSBRIDGE &bull;</span>
            </div>
          </div>
        </main>

        <footer className="footer" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="footer-brand">VANGUARD</div>
          <div className="footer-links">
            <div>
              <span className="meta-text">Headquarters</span>
              <p style={{ marginTop: '8px' }}>14 Berkeley St, Mayfair<br />London W1J 8DX</p>
            </div>
            <div style={{ display: 'flex', gap: '60px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="#" className="nav-link" style={{ color: 'var(--text-dark)' }}>Portfolio</a>
                <a href="#" className="nav-link" style={{ color: 'var(--text-dark)' }}>Journal</a>
                <a href="#" className="nav-link" style={{ color: 'var(--text-dark)' }}>About Us</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="#" className="nav-link" style={{ color: 'var(--text-dark)' }}>Instagram</a>
                <a href="#" className="nav-link" style={{ color: 'var(--text-dark)' }}>LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;
