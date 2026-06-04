import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useWorld } from '@/context/WorldContext';

/**
 * Background manager.
 * Renders the new interactive video background during the Entry Gate phase,
 * and seamlessly switches to the persistent WebGL starfield when the user enters the worlds.
 */
export function Background() {
  const mountRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.PointsMaterial | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { world, view, hoverState } = useWorld();

  // Set up the Three.js scene once.
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 320;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Starfield
    const COUNT = window.innerWidth < 700 ? 1400 : 2600;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 900;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 700;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 600;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: world === 'frontend' ? 0x0e0e12 : 0xffffff,
      size: 1.6,
      sizeAttenuation: true,
      transparent: true,
      opacity: world === 'frontend' ? 0.35 : 0.7,
      depthWrite: false,
    });
    materialRef.current = material;

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Mouse parallax target
    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5);
      mouse.y = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let raf = 0;
    const clock = new THREE.Clock();
    const render = () => {
      const t = clock.getElapsedTime();
      stars.rotation.y = t * 0.012;
      stars.rotation.x = t * 0.006;
      // ease camera toward mouse for depth parallax
      camera.position.x += (mouse.x * 60 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 40 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };

    if (reduce) {
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
    // Scene is built once; world re-tint handled in the effect below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-tint particles when the world changes (no scene rebuild).
  useEffect(() => {
    const m = materialRef.current;
    if (!m) return;
    m.color.set(world === 'frontend' ? 0x0e0e12 : 0xffffff);
    m.opacity = world === 'frontend' ? 0.35 : 0.7;
    m.needsUpdate = true;
  }, [world]);

  // Play/pause background video on hover
  useEffect(() => {
    if (view === 'gate' && videoRef.current) {
      if (hoverState !== 'none') {
        videoRef.current.play().catch(err => console.log('Video play failed:', err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [hoverState, view]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Three.js canvas container */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 transition-opacity duration-1000" 
        style={{ opacity: view === 'world' ? 1 : 0 }}
      />
      
      {/* Video Background (renders on Entry Gate) */}
      {view === 'gate' && (
        <div className="absolute inset-0 bg-[#0D0D12]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-[#0D0D12]/80 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />
          <video
            ref={videoRef}
            src="/UI_Backend_split-screen_transition_202606031817.mp4"
            className="w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: hoverState === 'frontend' 
                ? 'scale(1.4) translate(14%, 0%)' 
                : hoverState === 'backend' 
                ? 'scale(1.4) translate(-14%, 0%)' 
                : 'scale(1.0) translate(0%, 0%)',
              filter: hoverState !== 'none'
                ? 'brightness(0.75) contrast(1.1) saturate(1.15)'
                : 'brightness(0.6) contrast(0.95) saturate(0.85)'
            }}
            loop
            muted
            playsInline
          />
        </div>
      )}
    </div>
  );
}
