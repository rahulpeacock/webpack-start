module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-pxtorem')({
      propList: ['*'],
    }),
    'postcss-preset-env',
    require('tailwindcss'),
  ],
};
