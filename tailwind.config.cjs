/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}*",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:'#ee5555'
      }
    },
  },
  plugins: [  require('flowbite/plugin')],
}
