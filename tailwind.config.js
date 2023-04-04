/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "410px",
      // => @media (min-width: 410px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "color-primary": "#0E0F0E",
        "color-bg": "#6FFBF81A",
        "color-menu": "#211A1A",
        "color-nav": "#6FFBF81A",
        "color-halo": "#24EA5B",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },

    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [],
};
