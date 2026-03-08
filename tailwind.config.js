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
                base: '#0D0D12',
                surface: '#15151A',
                accent: '#F97316',
                textHigh: '#F5F5F7',
                textLow: '#888891'
            }
        },
    },
    plugins: [],
}
