/** @type {import('tailwindcss').Config} */
const Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#88aaee",
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.
        // light mode
        bg: "#dfe5f2",
        text: "#000",
        border: "#000",
        // dark mode
        darkBg: "#272933",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#212121", // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: "20px",
      },
      translate: {
        boxShadowX: "1px",
        boxShadowY: "1px",
        reverseBoxShadowX: "-1px",
        reverseBoxShadowY: "-1px",
      },
      fontWeight: {
        base: "400",
        heading: "800",
      },
      boxShadow: {
        "4": "2px 3px #000000",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default Config;