import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    purgecss({
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
        './index.html'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};
