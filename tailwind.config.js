/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff335f",
        "primary-off": "#ff1447",
        secondary: "#43a9a3",
        bg: "#ffffff",
        "bg-off": "#f7f7f9",
        text: "#373a3c",
        "text-off": "#818a91",
        border: "#eceeef",
        "primary-dark": "#ff5277",
        "primary-dark-off": "#ff2957",
        "secondary-dark": "#43a9a3",
        "bg-dark": "#0e141b",
        "bg-dark-off": "#252526",
        "text-dark": "#ffffff",
        "text-dark-off": "#818a91",
        "border-dark": "#2d2d2d",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
