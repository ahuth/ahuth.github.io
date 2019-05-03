module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');

  return {
    dir: {
      input: 'src',
      output: 'build',
    },
    passthroughFileCopy: true,
  };
};
