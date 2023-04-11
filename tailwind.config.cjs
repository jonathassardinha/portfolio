/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fefae0",
          main: "#dda15e",
          dark: "#bc6c25",
        },
        secondary: {
          light: "#606c38",
          main: "#283618",
        },
      },
    },
  },
  plugins: [],
};
