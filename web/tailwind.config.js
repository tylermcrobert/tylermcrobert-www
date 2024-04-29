/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      zIndex: {
        nav: '20',
        ['project-page']: '10',
        ['preview-overlay']: '30'
      },
      spacing: {
        ['nav-height']: '2.25rem',
        wrapper: '65rem',

        standard: '1.33rem',
        small: '0.667rem',
        medium: '3.16rem',
        large: '5rem'
      }
    }
  },
  plugins: []
};
