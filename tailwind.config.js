const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        medium: "50px",
        large: "100px",
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          // xl: "1440px",
          // "2xl": "1440px",
        },
      },
      fontFamily: {
        sans: ["Alef", "sans-serif", "Arial"],
      },
      colors: {
        primary: "#f4f4f4f4",
        secondary: "#c4c4c4c4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        ".bg-join": {
          backgroundImage: `url("/img/tech/macbook13.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
