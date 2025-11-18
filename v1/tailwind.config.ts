import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00D9FF',
          purple: '#B026FF',
          pink: '#FF00E5',
          cyan: '#00FFFF',
        },
        dark: {
          bg: '#0A0A0A',
          card: '#111111',
          border: '#1A1A1A',
        },
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00D9FF 0%, #B026FF 100%)',
        'radial-neon': 'radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.15) 0%, rgba(176, 38, 255, 0.15) 50%, transparent 70%)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(176, 38, 255, 0.5), 0 0 40px rgba(176, 38, 255, 0.3)',
        'glow': '0 0 30px rgba(0, 217, 255, 0.6), 0 0 60px rgba(176, 38, 255, 0.4)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(176, 38, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
export default config


