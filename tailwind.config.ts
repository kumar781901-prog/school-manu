import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff8f0',
          100: '#ffecd4',
          200: '#ffd5a0',
          300: '#ffb85c',
          400: '#ff9a1f',
          500: '#f07c00',
          600: '#d96300',
          700: '#b34d00',
          800: '#8f3d00',
          900: '#6e3000',
        },
        forest: {
          50: '#f0f7f0',
          100: '#d8edd8',
          200: '#aed8ae',
          300: '#7cbc7c',
          400: '#4f9e4f',
          500: '#2d7f2d',
          600: '#1e6320',
          700: '#164d18',
          800: '#0f3811',
          900: '#082509',
        },
        cream: {
          50: '#fdfbf6',
          100: '#faf5e8',
          200: '#f4e9cc',
          300: '#edd8a8',
          400: '#e4c47f',
          500: '#d9ab56',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        display: ['Palatino Linotype', 'Book Antiqua', 'Palatino', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
