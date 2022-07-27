// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/forms")],
// };

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        lightgreen: "#21A39B",
        playerGray: "#F4F2F3",
        beige: "#F1DCC9",
        olive: "#FED048",
        olive2: "#B9B7A4",
        brown: "#7B6A60",
        lightBeige: "#F7EEE4",
        clockBeige: "#F2E3D7",
        clockBackground: "#585858",
        yellow: "#FED048",
      },
      opacity: {
        62: "0.62",
      },
      fontFamily: {
        sans: ["Museo sans", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      height: {
        96: "24rem",
        128: "32rem",
        256: "64rem",
      },
      padding: {
        16: "4rem",
        32: "8rem",
        64: "16rem",
        128: "32rem",
        144: "36rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
        264: "66rem",
      },
      borderRadius: {
        xl: "2rem",
      },
      fontSize: {
        papa: "2.5rem",
        "4xl": "2.25rem",
        "5xl": "1rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "10rem",
      },
      screens: {
        xxl: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  variants: {
    scale: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["group-hover"],
  },
  plugins: [require("@tailwindcss/forms")],
};
