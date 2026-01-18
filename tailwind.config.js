/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0F172A",
        card: "#111827",
        primary: "#38BDF8",
      },
      borderRadius: {
        xl: "1rem",
      }
    },
  },
  plugins: [],
};
