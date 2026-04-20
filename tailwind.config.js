/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#e5e2e1",
        "on-secondary": "#690000",
        "outline": "#b18780",
        "surface-container-lowest": "#0e0e0e",
        "outline-variant": "#603e39",
        "primary-container": "#ff5540",
        "on-primary-container": "#5c0000",
        "surface-container": "#201f1f",
        "surface": "#131313",
        "surface-container-high": "#2a2a2a",
        "primary": "#ffb4a8",
        // Aquí agregamos los principales que usa tu HTML
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Space Grotesk", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [],
}