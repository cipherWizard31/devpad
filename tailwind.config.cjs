// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Move all your custom properties here
      // For example:
      colors: {
        border: "oklch(0.923 0.003 48.717)",
        input: "oklch(0.923 0.003 48.717)",
        ring: "oklch(0.709 0.01 56.259)",
        background: "oklch(1 0 0)",
        foreground: "oklch(0.147 0.004 49.25)",
        primary: {
          DEFAULT: "oklch(0.216 0.006 56.043)",
          foreground: "oklch(0.985 0.001 106.423)",
        },
        // etc.
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // You should also define the dark mode colors here
      // under a separate dark: prefix or similar.
    },
  },
  plugins: [require("tailwindcss-animate")],
};