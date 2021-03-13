module.exports = {
  purge: ['./src/**/*.njk', './src/**/*.html', './src/**/*.js', './src/**/*.md'],

  theme: {
    fontFamily: {
      display: ['Fascinate', 'cursive'],
      body: ['Quicksand'],
    },
    colors: {
      blue: {
        light: '#b0d2f4',
        DEFAULT: '#3880d3',
        dark: '#2f4d74',
      },
      green: {
        light: '#add79d',
        DEFAULT: '#69a251',
        dark: '#3c4e33',
      },
      white: {
        DEFAULT: '#f4f4f4',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
    },
  },
  variants: {},
  plugins: [],
};
