module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f0",
          100: "#dcf2dc",
          200: "#bae5ba",
          300: "#8dd18d",
          400: "#5cb85c",
          500: "#16A34A",
          600: "#118339",
          700: "#0f6b2f",
          800: "#0e5527",
          900: "#0d4621",
        },
        background: {
          primary: "#061C03",
          secondary: "#050F05",
        },
        border: {
          primary: "#284E24",
          success: "#16A34A",
          error: "#AF3023",
        },
      },
    },
  },
  plugins: [],
};
