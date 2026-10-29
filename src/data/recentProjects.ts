export interface RecentProject {
  title: string;
  tag: string;
  year: string;
  role: string;
  stack: string[];
  desc: string;
  /** Screenshot; omitted for typographic cards. */
  img?: string;
  /** Typographic hero text used when there is no screenshot. */
  label?: string;
  href: string;
  /** Link text; private builds link to their screenshot instead of a live URL. */
  cta: string;
  cvBullet: string;
}

export const RECENT_PROJECTS: RecentProject[] = [
  {
    title: 'Hermes Hub',
    tag: 'Product · Dashboard',
    year: '2026',
    role: 'Design + front-end',
    stack: ['React 19', 'TypeScript', 'TanStack Query', 'CopilotKit', 'Three.js'],
    desc: 'Operator dashboard for a multi-agent AI system: live agent status, a streaming chat with generative-UI cards, and a 3D command view. Lazy route splitting cut the main bundle from 2.2 MB to 110 KB.',
    img: 'images/recent/hub.webp',
    href: 'images/recent/hub.webp',
    cta: 'View screen',
    cvBullet: 'Designed and built a React 19 / TypeScript operator dashboard for a multi-agent AI system; TanStack Query caching and route-level code splitting cut the main bundle from 2.2 MB to 110 KB.',
  },
  {
    title: 'Severus Courtyard',
    tag: '3D · Concept',
    year: '2026',
    role: 'Concept + motion',
    stack: ['React Three Fiber', 'drei', 'Generative video', 'Motion graphics'],
    desc: 'The Hermes Hub reimagined as a world you fly through: four suit kingdoms around a central court, agent trading cards, and a game layer whose scores come only from real work data. Includes a 77-second demo film.',
    img: 'demos/courtyard/demo-poster.webp',
    href: '/demos/courtyard/',
    cta: 'Watch the concept',
    cvBullet: 'Designed a 3D spatial navigation concept for an agent dashboard in React Three Fiber, with a game layer driven entirely by live product data, and directed its 77-second demo film.',
  },
  {
    title: 'Severus Studio',
    tag: 'Creative tool',
    year: '2026',
    role: 'UX + front-end',
    stack: ['React', 'TypeScript', 'Tailwind', 'REST APIs'],
    desc: 'A single creative workspace for image, video and ad generation. App catalogue with a command palette, a plan-then-render flow so paid renders always need approval, uploads and share links.',
    img: 'images/recent/studio.webp',
    href: 'images/recent/studio.webp',
    cta: 'View screen',
    cvBullet: 'Built a creative-generation workspace in React and TypeScript with a plan-then-render flow that gates every paid render behind explicit approval.',
  },
  {
    title: 'Automation Catalogue',
    tag: 'Service page',
    year: '2026',
    role: 'Content design + build',
    stack: ['HTML', 'CSS', 'Vanilla JS', 'Data-driven'],
    desc: 'Client-facing service menu where every system reads like a workflow diagram: trigger → steps → result. Prices and delivery times render from one catalogue data block, with light and dark themes.',
    img: 'images/recent/catalogue.webp',
    href: '/demos/automation-catalogue.html',
    cta: 'Open page',
    cvBullet: 'Built a data-driven service catalogue page that renders pricing and workflow diagrams from a single source of truth, in light and dark themes.',
  },
  {
    title: 'Vanguard Estates',
    tag: 'Marketing site',
    year: '2026',
    role: 'Design + build',
    stack: ['React', 'Vite', 'Tailwind', 'GSAP', 'Lenis', 'Three.js'],
    desc: 'Luxury London estate agency site: editorial serif typography, a dark grain hero with smooth scroll, property listings and a valuation funnel.',
    img: 'images/recent/estate.webp',
    href: '/london-estate/',
    cta: 'Open live site',
    cvBullet: 'Designed and shipped a luxury estate-agency marketing site in React, Vite and GSAP with Lenis smooth scroll, an editorial type system and a valuation lead funnel.',
  },
  {
    title: 'Hermes OS — Mission Control',
    tag: 'Demo · Dashboard',
    year: '2026',
    role: 'Design + front-end',
    stack: ['React', 'TypeScript', 'SQLite'],
    desc: 'Agency operating system demo: run metrics, pipeline value, agent roster, kanban, run log and CRM in one dense, keyboard-friendly shell.',
    img: 'images/recent/hermesos.webp',
    href: '/demos/hermes-os.html',
    cta: 'Open demo',
    cvBullet: '',
  },
  {
    title: 'UI / UX Design',
    tag: 'Product Design',
    year: 'Ongoing',
    role: 'Research → Figma → Ship',
    stack: ['Design systems', 'Accessibility', 'Conversion'],
    desc: 'End-to-end interface design: research, flows, hi-fi UI, and shipped front-ends. From discovery through to deployed product.',
    label: 'Research → Figma → Ship',
    href: 'https://github.com/Idris-Michael',
    cta: 'GitHub',
    cvBullet: '',
  },
  {
    title: 'Front-End Builds',
    tag: 'React · TypeScript',
    year: 'Ongoing',
    role: 'Engineering',
    stack: ['Motion design', 'Three.js', 'GSAP'],
    desc: 'Production React and TypeScript builds with motion, WebGL, and design systems. Severus Overwatch is one example.',
    label: 'React · TypeScript · WebGL',
    href: 'https://github.com/Idris-Michael/severus-overwatch',
    cta: 'GitHub',
    cvBullet: '',
  },
  {
    title: 'AI Video & Motion',
    tag: 'Creative',
    year: 'Ongoing',
    role: 'Direction + pipelines',
    stack: ['VideoDB', 'Hyperframes', 'FFmpeg'],
    desc: 'Generative video pipelines, automated clipping, and motion direction. Built on VideoDB and custom render pipelines.',
    label: 'VideoDB · Hyperframes',
    href: 'https://github.com/Idris-Michael',
    cta: 'GitHub',
    cvBullet: '',
  },
];
