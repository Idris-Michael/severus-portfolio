/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                barlow: ['Barlow', 'sans-serif'],
            },
            colors: {
                base: '#000000',
                surface: '#0A0A0A',
                surfaceHover: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.08)',
                accent: '#F97316',
                accentGlow: 'rgba(249, 115, 22, 0.4)',
                textHigh: '#FFFFFF',
                textMid: '#A1A1AA',
                textLow: '#52525B'
            },
            animation: {
                "blob": "blob 10s infinite alternate",
                "spin-slow": "spin 12s linear infinite"
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(50px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-40px, 40px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" }
                }
            }
        },
    },
    plugins: [],
}
