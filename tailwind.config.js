/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'spin-once': 'spin .5s linear',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}