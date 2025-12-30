import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#135bec",
        "primary-hover": "#1d6bf5",
        "background-light": "#f6f6f8",
        "background-dark": "#050505",
        "card-dark": "#111722",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #ff6b6b, #feca57)",
      },
    },
  },
} satisfies Config;


