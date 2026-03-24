import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "home-aurora-a": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.28",
          },
          "50%": {
            transform: "translate(5%, -4%) scale(1.12)",
            opacity: "0.42",
          },
        },
        "home-aurora-b": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1.05)",
            opacity: "0.2",
          },
          "50%": {
            transform: "translate(-6%, 5%) scale(1)",
            opacity: "0.35",
          },
        },
        "home-beam": {
          "0%, 100%": {
            transform: "translateX(-18%) skewX(-14deg)",
            opacity: "0.04",
          },
          "50%": {
            transform: "translateX(12%) skewX(-14deg)",
            opacity: "0.085",
          },
        },
        "home-beam-slow": {
          "0%, 100%": {
            transform: "translateX(10%) skewX(10deg)",
            opacity: "0.03",
          },
          "50%": {
            transform: "translateX(-14%) skewX(10deg)",
            opacity: "0.065",
          },
        },
        "home-drift": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.12" },
          "50%": { transform: "translateY(-10px)", opacity: "0.28" },
        },
      },
      animation: {
        "home-aurora-a": "home-aurora-a 24s ease-in-out infinite",
        "home-aurora-b": "home-aurora-b 32s ease-in-out -8s infinite",
        "home-beam": "home-beam 20s ease-in-out infinite",
        "home-beam-slow": "home-beam-slow 26s ease-in-out -5s infinite",
        "home-drift": "home-drift 8s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
