module.exports = {
  content: ["./app/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Jaro_400Regular: ["Jaro_400Regular"],
      },
    },
  },
  plugins: [],
};
