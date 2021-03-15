const htmlmin = require('html-minifier');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget('./_tmp/style.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });

  eleventyConfig.setBrowserSyncConfig({
    files: './_site/tailwind.css',
  });

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
  });

  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.addShortcode('version', function () {
    return String(Date.now());
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (process.env.ELEVENTY_PRODUCTION && outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // eleventyConfig.setTemplateFormats(['md', 'css', 'njk']);

  return {
    passthroughFileCopy: true,
    dir: { input: 'src', includes: '_includes', output: '_site', data: '_data' },
  };
};
