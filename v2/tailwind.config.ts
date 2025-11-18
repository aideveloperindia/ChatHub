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
        shine: {
          gold: '#FFD700',
          silver: '#C0C0C0',
          platinum: '#E5E4E2',
        },
        neon: {
          cyan: '#00FFFF',
          magenta: '#FF00FF',
          yellow: '#FFFF00',
          green: '#00FF00',
        },
      },
      backgroundImage: {
        'shine-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FF6347 50%, #FF1493 75%, #8A2BE2 100%)',
        'radial-shine': 'radial-gradient(circle at center, rgba(255, 215, 0, 0.3) 0%, rgba(255, 20, 147, 0.2) 50%, transparent 70%)',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      },
      boxShadow: {
        'shine': '0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 20, 147, 0.4), 0 0 90px rgba(138, 43, 226, 0.3)',
        'shine-lg': '0 0 50px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 20, 147, 0.6), 0 0 150px rgba(138, 43, 226, 0.4)',
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6)',
        'glow-magenta': '0 0 20px rgba(255, 0, 255, 0.8), 0 0 40px rgba(255, 0, 255, 0.6)',
      },
      animation: {
        'shine': 'shine 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
        'pulse-shine': 'pulse-shine 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(5deg)' },
          '66%': { transform: 'translateY(30px) rotate(-5deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-shine': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 20, 147, 0.8)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
