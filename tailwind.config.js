/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#40027a",

          secondary: "#7b72d8",

          accent: "#44e24e",

          neutral: "#181424",

          info: "#35A2D4",

          success: "#0F7547",

          warning: "#F8C73F",

          error: "#DE3F5A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
