/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': ' #0c2461',
        'light-green':  ' #1dd1a1',
        'blueish' : '#1e3799',
        'greenlight ' : '#f7feff',
        'darkblue' : '#0013c8'
      },
      spacing: {
        '128': '32rem',
        '17': '4.375rem'
        
      }
    },

  },
  plugins: [],
}

