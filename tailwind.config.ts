import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        aurora: {
          mint: '#83D4B3',
          'mint-dark': '#55BA91',
          'mint-deep': '#48A17D',
          'mint-shadow': '#62BC98',
          'mint-soft': '#E4F6EF',
          'mint-muted': '#C4DBD2',
          gold: '#E3D578',
          gray: '#848484',
          border: '#ECECEC',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Montserrat Alternates"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        auroraCard: '47px',
        auroraInner: '32px',
        auroraField: '16px',
        auroraPill: '999px',
      },
      boxShadow: {
        auroraGlow: '0 28px 48px rgba(72, 161, 125, 0.24)',
        auroraCard: '0 18px 32px rgba(98, 188, 152, 0.24)',
      },
      maxWidth: {
        aurora: '1580px',
        auroraNav: '1680px',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
} satisfies Config;
