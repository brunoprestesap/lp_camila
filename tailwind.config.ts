import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: "14pt",
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],

      "hero": "88.8pt",
      "hero-mobile": "55pt",
      "subtitle": "45pt",
      "subtitle-mobile": "20pt",
      "hero-text": "20pt",
      "hero-text-mobile": "15pt",

      "title-section": "62pt",
      "title-section-mobile": "45pt",
      "text-section": "14pt",
      "text-section-mobile": "14pt"
    },
    backgroundImage: {
      hero: "linear-gradient(rgba(210, 180, 150, 0.3), rgba(210, 180, 150, 0.3)), url('/assets/background-image.webp')",
      atendo: "url('/assets/onde_atendo.webp')",
    },
    extend: {
      colors: {
        "dark-brown": "#2a1810",
        background: {
          light: "#FFFFFF",
          primary: "#D2B496",
          secondary: "#935F3D",
          tertiary: "#C4A190",
          quarternary: "#ECE0D4"
        },
        text: {
          primary: "#372118",
          secondary: "#f5ebe1",
          tertiary: "#311E15",
          quaternary: "#663a14"
        },
      },
      fontFamily: {
        garet: ['Garet', "sans-serif"],
        ttwellingtons: ['TT Wellingtons Trl', "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
