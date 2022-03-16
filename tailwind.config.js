module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter"],
      mono: ['"Jetbrains Mono"'],
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin"),
  ],

  daisyui: {
    themes: false,
  },
};
