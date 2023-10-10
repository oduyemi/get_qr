/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Montserrat", "sans-serif"],
      },
      colors: {
        burnt: "#EC4E20",
        washed: "#F7A278",
        subtext: "#FEF5EF",
        placeholderColor: "#FFFFFA"
      },
    },
  },
  plugins: [],
};

