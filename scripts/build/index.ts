import fs from 'fs';
import glob from 'glob';
import nunjucks from 'nunjucks';
import path from 'path';
import { execSync } from 'child_process';
import * as Article from './article';
import * as Output from './output';

nunjucks.configure('src', { autoescape: false });

const pageFiles = glob.sync('src/pages/**/*.html', { nodir: true });
const markdownFiles = glob.sync('src/pages/**/*.md', { nodir: true });

// Read each markdown article file and determine information about it, such as its contents,
// front matter data, and output path.
const articles = markdownFiles.map(Article.read);

const pageResults = pageFiles.map(function (filePath) {
  const localizedPath = filePath.replace(/^src\//, '');
  const outputPath = filePath.replace(/^src\/pages\//, 'build/');
  const contents = nunjucks.render(localizedPath, {
    articles: articles,
  });

  return {
    contents,
    outputPath,
  };
});

const articleResults = articles.map(Output.fromArticle);
articleResults.forEach(Output.write);

// Create the build directory if necessary.
execSync('mkdir -p build');

pageResults.forEach(function (result) {
  const outputDirname = path.dirname(result.outputPath);
  fs.mkdirSync(outputDirname, { recursive: true });
  fs.writeFileSync(result.outputPath, result.contents);
});

// Move every "static" file into the build directory.
execSync('cp -R src/static/ build');
