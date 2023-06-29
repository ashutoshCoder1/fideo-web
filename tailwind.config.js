/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'hero-1': 'rgba(1, 12, 12, 1)',
      }
    },
  },
  plugins: [require("preline/plugin")],
  corePlugins: {
    preflight: false,
  },
};