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
      'mMM': { 'max': '480px' },
      'mSM': { 'max': '767px' },
      'mMD': { 'max': '768px', },
      'mXG': { 'max': '980px' },
      'mLG': { 'max': '1024px' },
      'mXL': { 'max': '1280px' },
      'mmMD': { 'min': '768px', 'max': '979px' },
      'mmSD': { 'min': '980px', 'max': '1512px' },
    }
  },
  plugins: [],
}
