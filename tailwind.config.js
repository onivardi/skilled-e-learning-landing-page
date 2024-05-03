/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        lightBlue: "#666CA3",
        darkBlue: "#13183f",
        MyGray: "#83869a",
        pinkChiclete: "#f74780",
        pinkRose: "#ffa7c3",
        btnPink: "#f02aa6",
        btnOrange2: "#ff6f48",
        btnBlue: "#4851ff",
      },
      backgroundImage: {
        "hero-mobile": "url('../assets/image-hero-mobile.png')",
        "hero-table": "url('../assets/image-hero-tablet.png')",
        "hero-desktop": "url('../assets/image-hero-desktop.png')",
      },
    },
  },
  plugins: [],
};
