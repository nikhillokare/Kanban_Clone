/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F5F5F5",
        "dark-gray": "#787486",
        "light-purple": "#5030E514",
        purple: "#5030E5",
        orange: "#FFA500",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
