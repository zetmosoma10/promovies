/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#1E1E1E",
        surfaceColor: "#2C2C2C",
        lightGray: "#E0E0E0",
        catedGray: "#A0A0A0",
        AzureBlue: "#3B82F6",
        imperialRed: "#EF4444",
        mintGreen: "#10B981",
      },
    },
  },
  plugins: [],
};
