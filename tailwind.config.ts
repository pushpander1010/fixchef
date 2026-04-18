import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand palette
        chili:  { DEFAULT: "#e63946", light: "#ff6b6b", dark: "#c1121f" },
        saffron:{ DEFAULT: "#f4a261", light: "#ffd166", dark: "#e76f51" },
        herb:   { DEFAULT: "#2d6a4f", light: "#52b788", dark: "#1b4332" },
        cream:  { DEFAULT: "#fffbf5", dark: "#fff0d6" },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "food-gradient": "linear-gradient(135deg, #ff6b35 0%, #f7c59f 50%, #efefd0 100%)",
        "hero-overlay":  "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
      },
      boxShadow: {
        card:  "0 4px 24px -4px rgba(230,57,70,0.12), 0 1px 4px rgba(0,0,0,0.06)",
        "card-hover": "0 12px 40px -8px rgba(230,57,70,0.22), 0 2px 8px rgba(0,0,0,0.08)",
        float: "0 8px 32px rgba(230,57,70,0.28)",
      },
    },
  },
  plugins: [],
};
export default config;
