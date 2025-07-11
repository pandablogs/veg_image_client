/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('https://img.freepik.com/premium-photo/light-effects-backgrounds-electronics-futuristic_53876-232997.jpg')",
      }
    },
  },
  plugins: [],
}