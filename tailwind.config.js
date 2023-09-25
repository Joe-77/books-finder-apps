/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height : {
        normal : '80vh'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
