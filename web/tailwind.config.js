/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1900px'
    },
    extend: {
      backgroundColor: {
        'image-preload': '#f5f5f5'
      },
      fontFamily: {
        sans: ['Suisse', 'Helvetica', 'Arial', 'sans-serif']
      },
      zIndex: {
        nav: '20',
        'project-page': '10',
        'preview-overlay': '30'
      },
      spacing: {
        'nav-height': '2.25rem',
        wrapper: '65rem',

        standard: '1.33rem',
        small: '0.667rem',
        medium: '3.16rem',
        large: '5rem'
      },
      textIndent: {
        DEFAULT: '2em'
      }
    }
  },
  plugins: []
};
