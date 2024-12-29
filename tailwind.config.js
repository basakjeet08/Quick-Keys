/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7979fe",
        secondary: "white",
        text: "white",
        background: "#212121",
      },
    },
  },
  plugins: [],
};
