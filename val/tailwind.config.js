/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                onyx: '#0A0A0A',
                champagne: '#D4AF37',
                crimson: '#3D0B0B',
                ivory: '#FFFFF0',
                charcoal: '#1A1A1A',
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-luxury': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
                'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4E4BA 50%, #D4AF37 100%)',
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-gold': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
}
