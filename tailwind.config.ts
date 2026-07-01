import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        root: "#636853",
        serene: "#b1b2a1",
        earth: "#c3896d",
        peach: "#ddbea9",
        sand: "#fef8ec",
        essence: "#f1e4d4",
        ink: "#34382d",
      },
      fontFamily: {
        sans: ["Avenir Next", "Avenir", "Segoe UI", "Helvetica Neue", "sans-serif"],
        display: ["Iowan Old Style", "Baskerville", "Palatino Linotype", "Book Antiqua", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(99, 104, 83, 0.12)",
        card: "0 12px 40px rgba(67, 60, 49, 0.08)",
      },
      borderRadius: {
        organic: "2.25rem 2.25rem 2.25rem 0.75rem",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -12px, 0) rotate(2deg)" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
