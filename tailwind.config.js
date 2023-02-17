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
        textNavbar: "0px 19px 13px rgba(255,255,255,0.7)",
      },
      textUnderlineOffset: {
        3: "3px",
      },
      boxShadow: {
        shade: " 0px 0px 21px 3px #44075e",
      },
      colors: {
        uline: "rgba(255,255,255,0.3",
        border: "rgba(122, 122, 122,0.3)",
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-500px 0",
          },
          "100%": {
            backgroundPosition: "500px 0",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
