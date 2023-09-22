/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
      spacing: {},
      fontFamily: {
        "px-regular": "Inter",
      },
    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
