/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        lightGrayishBlue: {
          50: "hsl(210, 60%, 98%)",
          100: "hsl(211, 68%, 94%)",
          200: "hsl(205, 33%, 90%)",
          300: "hsl(219, 14%, 63%)",
          400: "hsl(219, 12%, 42%)",
          500: "hsl(224, 21%, 14%)",
        },
        primaryRed: "hsl(1, 90%, 64%)",
        primaryBlue: "hsl(219, 85%, 26%)",
      },
    },
  },
  plugins: [],
};
