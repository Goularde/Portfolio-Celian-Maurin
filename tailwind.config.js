/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "neumorphic-out": "15px 15px 30px #0e1421,-15px -15px 30px #141d2f,inset 0px 0px 0px #141c2d,inset -0px -0px 0px #141d2f",
        "neumorphic-in":
          "0px 0px 0px #0e1421,0px 0px 0px #141d2f, inset 5px 5px 20px #0e131f,inset -10px -10px 20px #141c2d",
      },
    },
  },
  plugins: [],
};