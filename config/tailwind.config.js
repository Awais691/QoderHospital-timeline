/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#04263A",
          900: "#083A56",
          800: "#0C4667",
          700: "#14597E"
        },
        teal: {
          700: "#0A6A66",
          600: "#0E7C78",
          500: "#159C93",
          100: "#DDEFEC",
          50: "#EEF7F5"
        },
        sky: {
          100: "#EAF3F8",
          200: "#D8E8F0"
        },
        sand: {
          50: "#FBF9F4",
          100: "#F6F2E9",
          200: "#EDE6D8"
        },
        ink: {
          DEFAULT: "#1C2B32",
          soft: "#4D5F67",
          faint: "#76878E"
        },
        line: "#DCE5E8",
        alert: "#B3261E"
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      maxWidth: {
        content: "1200px",
        wide: "1360px"
      },
      boxShadow: {
        soft: "0 12px 40px -18px rgba(8, 58, 86, 0.22)",
        lift: "0 22px 50px -24px rgba(8, 58, 86, 0.32)"
      },
      borderRadius: {
        card: "18px"
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};
