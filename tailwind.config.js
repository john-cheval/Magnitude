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
        homeHero:
          "linear-gradient(0deg, #001221 -15.39%, rgba(0, 18, 30, 0.00) 98.61%)",
        homeHero2:
          "linear-gradient(180deg, #001221 -15.39%, rgba(0, 18, 30, 0.00) 98.61%)",
        homeBottomGrad:
          "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
        footerBG: "url('/common/footer.jpg')",
        footerGrad:
          "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 76.82%)",
        footerGrad2:
          "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 76.82%)",
        aboutBgGrad:
          "linear-gradient(0deg, #000 10%, rgba(0, 0, 0, 0.00) 100%)",
        serviceHeroGrad:
          "linear-gradient(120deg, rgba(0, 0, 0, 0.93) 0.27%, rgba(0, 0, 0, 0.00) 75.73%)",
        serviceHeroGrad2:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.93) 0.27%, rgba(0, 0, 0, 0.00) 99.73%)",
        contactTopGrad:
          "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
