import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-caption)", "sans-serif"], // Anek Telugu = font par défaut
      mono: ["var(--font-geist-mono)"],
      caption: ["var(--font-caption)"], // si tu veux une variante caption
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        ipadPro: "900px",
        lg: "1100px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        bleu: {
          fonce: "#1B4965",
          moyen: "#5FA8D3",
          clair: "#CAE9FF",
        },
        jaune: {
          dynamique: "#F4B400",
        },
        brand: {
          primary: "#F4B400",
          dark: "#1B4965",
          medium: "#5FA8D3",
          light: "#CAE9FF",
          cream: "#CAE9FF", // utilisé dans layout & globals.css
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, { hyphens: string }>) => void;
    }) {
      addUtilities({
        ".hyphens-auto": { hyphens: "auto" },
        ".hyphens-none": { hyphens: "none" },
        ".hyphens-manual": { hyphens: "manual" },
      });
    },
  ],
};

export default config;
