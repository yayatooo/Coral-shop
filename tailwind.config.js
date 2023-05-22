/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#E5E5E5",
        "dark-btn": "#1E2832",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "banner-pattern": "url('./background.svg')",
      },
    },
  },
  plugins: [],
};
