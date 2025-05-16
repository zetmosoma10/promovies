/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#1E1E1E",
        surfaceColor: "#2C2C2C",
        mintGreen: "#10B981",
      },
    },
  },
  plugins: [],
};
