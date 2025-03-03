/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      colors: {
        "neuro-blue": "#3A86FF",
        "creative-yellow": "#FFD166",
        "tech-grey": "#4A4A4A",
        "cultural-red": "#D72638",
        "custom-orange": "#FFA500",
        black: "#000000",
        "light-gray": "#F5F5F5",
        "rose-red": "E91815",
        blood: "690D0B",
        timberwolf: "DAD0D0",
        "white-smoke": "F3F0F0",
        charcoal: "180705",
        "dark-grey": "1D1E27",
      },
    },
  },
  plugins: [],
};
