const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/.nojekyll');
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('node_modules/@ahuth/styles/index.css');
  eleventyConfig.addPassthroughCopy('node_modules/prism-themes/themes/prism-atom-dark.css');

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: 'src',
      output: 'build',
    },
    passthroughFileCopy: true,
  };
};
