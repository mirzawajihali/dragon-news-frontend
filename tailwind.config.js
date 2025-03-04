/** @type {import('tailwindcss').Config} */
export default {

    content: ["./index.html",
        "./src/**/*.{html,js,ts,jsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
    daisyui: {
        themes: ["light"], // Ensures light mode is default
      },
  }