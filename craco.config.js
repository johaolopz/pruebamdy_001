const PURGE_CSS = require('@fullhuman/postcss-purgecss');

const AUTOPREFIXER = require('autoprefixer');

module.exports = {
  plugins: [
    {plugin: require('craco-plugin-scoped-css')}
  ],
  style: {
    postcss: {
      plugins:
      process.env.NODE_ENV === 'production'
      ? [AUTOPREFIXER, PURGE_CSS({
        content: [
          './src/**/*.html',
          './src/**/*.tsx',
          './src/**/*.ts',
          './src/**/*.js',
        ],
        safelist: [
          /svg.*/,
          /fa.*/,
          /^d-*/,
        ],
      })]
      : [AUTOPREFIXER],
    }
  }
};
