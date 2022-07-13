/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        BGmenuOpen: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

      },
      animation: {
        'menu-open-bg': 'BGmenuOpen .5s ease',
      },
    },

    screens: {
      'mSM': { 'max': '680px' },
      'mMD': { 'max': '768px' },
      'mLG': { 'max': '1024px' },
      'mXL': { 'max': '1280px' },
    }
  },
  plugins: [],
}
