/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        ice: ["Iceland", "cursive"],
        inter: ["Inter", "sans-serif"],
        soli: ["Solitreo', cursive"],
      },
      dropShadow: {
        "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)"],
        text: "0 1px 1px white",
      },
      boxShadow: {
        shade: " 0px 0px 21px 3px #44075e",
      },
    },
  },
  plugins: [],
};
