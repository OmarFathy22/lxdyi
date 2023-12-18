export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {  'max': '600px' },
      'max-900': {  'max': '900px' },
      'min-900': {  'min': '900px' },
      'max-1200': {  'max': '1200px' },
      'min-1200': {  'min': '1200px' },
      'min-1400': {  'min': '1400px' },
    },
  },
  plugins: [],
}