module.exports = {
  purge: {
    preserveHtmlElements: false,
    enabled: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['tahoma', 'serif'],
        inherit: 'inherit',
      },
      colors: {
        blue: {
          DEFAULT: '#2e73ff',
        },
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
    },
  },
  plugins: [],
}
