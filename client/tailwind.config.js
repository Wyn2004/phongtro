module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px'
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary1: '#1266dd',
        secondary2: '#f73859',
        'bg-overlay-70': 'rgba(0, 0, 0, 0.7)',
        'bg-overlay-30': 'rgba(0, 0, 0, 0.3)',
        'bg-overlay-50': 'rgba(0, 0, 0, 0.5)'
      }, 
      maxWidth: {
        '600': '600px',
        '1100': '1100px'
      },
      cusor: {
        pointer: 'pointer'
      }
    },
  },
  plugins: [],
}