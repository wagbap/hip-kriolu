/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kriolu: {
          bg: '#0a0a0a',
          card: '#141414',
          deep: '#050505',
          panel: '#0d0d0d',
          accent: '#4da6ff',
          accentDark: '#1a5c99',
          accentSoft: '#80c0ff',
        },
      },
      fontFamily: {
  sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
  script: ['Caveat', 'cursive'],
  script2: ['Dancing Script', 'cursive'],
  handwriting: ['Kalam', 'cursive'],
},
      keyframes: {
        heroZoom:     { '0%': { transform: 'scale(1.05)' }, '100%': { transform: 'scale(1.15)' } },
        crownFloat:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        scrollBounce: { '0%,100%': { transform: 'translate(-50%, 0)' }, '50%': { transform: 'translate(-50%, 8px)' } },
        pulseDot:     { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.5', transform: 'scale(0.85)' } },
      },
      animation: {
        'hero-zoom':     'heroZoom 20s ease-in-out infinite alternate',
        'crown-float':   'crownFloat 3s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'pulse-dot':     'pulseDot 2s ease-in-out infinite',
      },
      boxShadow: {
        glow:        '0 0 12px rgba(77,166,255,0.6)',
        glowLg:      '0 0 25px rgba(77,166,255,1)',
        card:        '0 15px 40px rgba(0,0,0,0.7)',
        cardHover:   '0 25px 60px rgba(77,166,255,0.4)',
        poster:      '0 10px 30px rgba(0,0,0,0.6)',
        posterHover: '0 20px 50px rgba(77,166,255,0.35)',
        cta:         '0 15px 40px rgba(77,166,255,0.5)',
        ctaHover:    '0 25px 60px rgba(77,166,255,0.8)',
        slider:      '0 30px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05)',
        centerImg:   '0 20px 60px rgba(0,0,0,0.9), 0 0 60px rgba(77,166,255,0.4)',
      },
      backgroundImage: {
        'hero-fade':  'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.75) 75%, rgba(10,10,10,1) 100%)',
        'about-fade': 'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.95) 100%)',
        'card-fade':  'linear-gradient(180deg, rgba(77,166,255,0) 40%, rgba(77,166,255,0.85) 100%)',
        'gold-text':  'linear-gradient(180deg, #fff 0%, #a0c8ff 50%, #4da6ff 100%)',
        'accent-btn': 'linear-gradient(135deg, #4da6ff, #1a5c99)',
        'slider-bg':  'linear-gradient(145deg, #0d0d0d 0%, #050505 100%)',
        'track-fade': 'linear-gradient(90deg, transparent, rgba(77,166,255,0.6), transparent)',
      },
    },
  },
  plugins: [],
};