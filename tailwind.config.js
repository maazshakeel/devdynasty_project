/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['Source Sans 3', 'sans-serif']
    },
    colors: {
      primary: "#03AC0E",
      gray: "#F3EEEF"
    }
  },
},
plugins: [],
};
