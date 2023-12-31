/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['"Chakra Petch"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      animation: {
        bounce200: "bounce 1s infinte 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      colors: {
        primary: "#03AC0E",
        gray: "#F3EEEF",
      },
    },
  },
  plugins: [],
};
