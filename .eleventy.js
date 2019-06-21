module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('node_modules/@ahuth/styles/index.css');

  return {
    dir: {
      input: 'src',
      output: 'build',
    },
    passthroughFileCopy: true,
  };
};
