/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        comparative: {
          primary: "#212936",
          secondary: "#8b929d",
          pink: "#e290ff",
          yellow: "#fbce70",
          green: "#61c8c2",
          orange: "#ff9792",
          blue: "#7098f6",
          grey: "#f7fafc",
          purple: "#4338ca",
          violet: "#1c162e",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
