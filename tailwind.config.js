module.exports = {
  important: false,
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './development/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'color-one': '#90FCF9',
        'color-second': '#63B4D1',
        'color-third': '#7699D4',
        'color-fourth': '#9448BC',
        'color-fifth': '#480355',
        'red-error': '#FF2929',
        'yellow-error': '#FFF629',
        'gray-unstable': '#444444',
        'whatsapp-green': '#25D366'
      }
    },
  },
  variants: {},
  plugins: [],
}
