module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "425px" },
      md: { min: "426px", max: "767px" },
      lg: { min: "768px", max: "1024px" },
      xl: { min: "1024px", max: "1439px" },
      xxl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
