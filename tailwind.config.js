/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Forest & Nature
        'forest-deep': '#1a4d2e',
        'forest-primary': '#2d6a4f',
        'leaf-green': '#52b788',
        'leaf-light': '#95d5b2',
        'leaf-pale': '#d8f3dc',
        // Secondary Colors - Sky & Earth
        'sky-deep': '#1e6091',
        'sky-primary': '#468faf',
        'sky-light': '#89c2d9',
        'sky-pale': '#caf0f8',
        'earth-deep': '#6b4423',
        'earth-primary': '#a67c52',
        'earth-light': '#d4a574',
        // Accent Colors - Warmth & Hope
        'sun-golden': '#f4a261',
        'sun-warm': '#e9c46a',
        'sun-bright': '#f8e16c',
        'coral-soft': '#e07a5f',
        // Neutrals
        'cream': '#fefae0',
        'cream-soft': '#fffbf0',
        'off-white': '#fefcf6',
        'warm-gray': '#9a8873',
        'text-primary': '#2c3e2d',
        'text-secondary': '#5a6b5c',
        'text-muted': '#7a8b7c',
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(45, 106, 79, 0.08)',
        'medium': '0 8px 30px rgba(45, 106, 79, 0.12)',
        'large': '0 12px 50px rgba(45, 106, 79, 0.15)',
        'glow': '0 0 40px rgba(82, 183, 136, 0.2)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'morph': 'morph 15s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '50% 60% 70% 40% / 60% 50% 60% 50%' },
          '25%': { borderRadius: '70% 40% 50% 60% / 50% 60% 50% 60%' },
          '50%': { borderRadius: '40% 60% 50% 70% / 60% 40% 70% 50%' },
          '75%': { borderRadius: '60% 50% 40% 60% / 40% 70% 60% 50%' },
        },
      },
    },
  },
  plugins: [],
}
