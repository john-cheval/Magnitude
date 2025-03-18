/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    backgroundClip: true,
  },
  variants: {
    extend: {
      backgroundClip: ["hover"],
      textColor: ["hover"],
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#fff",
        altermain: "#000",
        navBg: "#000",
      },
      fontFamily: {
        helvatica: ["Helvetica Neue"],
        century: ["Century Gothic"],
      },
      backgroundImage: {
        homeHero: "url('/Home/bottomgrad.svg')",
        homeHero2: "url('/Home/topGrad.svg')",
        cruise: "url('/Home/cruise.png')",
      },
    },
  },
  plugins: [],
};
