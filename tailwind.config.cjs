/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // From design.json
        'brand-bg': '#fff6f2',
        'brand-surface': '#ffffff',
        'brand-surface-alt': '#fff3ed',
        'brand-primary': '#e07a63',
        'brand-primary-dark': '#c45f4c',
        'brand-accent': '#f2a085',
        'brand-text-primary': '#52423d',
        'brand-text-secondary': '#7a6c66',
        'brand-muted': '#b9a9a2',
        'brand-success': '#66c27a',
        'brand-danger': '#e07a63',
        'brand-divider': '#f0e2dc',
        'brand-tag': '#fce9de',
        'brand-announcement': '#ddb3a5',
        'brand-selling-bg': '#ffe7dc',
        'brand-icon-bg': '#f7e6dc',
        'brand-icon-color': '#d5ab9a',
      },
      fontFamily: {
        heebo: ['Heebo', 'Assistant', 'Rubik', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '22px',
        '2xl': '28px',
        '3xl': '34px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
        'xxl': '48px',
      },
      borderRadius: {
        'card': '16px',
        'rounded': '12px',
        'pill': '999px',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0,0,0,0.06)',
        'button': '0 6px 16px rgba(224,122,99,0.35)',
      },
      maxWidth: {
        'content': '1120px',
      },
    },
  },
  plugins: [],
};

