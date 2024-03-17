/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /max-w-(sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hind Madurai', 'system-ui'],
      },
      boxShadow: {
        'app-1': '0px 1px 11px #0000000a',
      },
    },
  },
  plugins: [],
}