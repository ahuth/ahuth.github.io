import fs from 'fs';
import glob from 'glob';
import nunjucks from 'nunjucks';
import path from 'path';
import { execSync } from 'child_process';
import { format } from 'date-fns';
import * as Markdown from './markdown';

nunjucks.configure('src', { autoescape: false });

const pageFiles = glob.sync('src/pages/**/*.html', { nodir: true });
const markdownFiles = glob.sync('src/pages/**/*.md', { nodir: true });

// Read each markdown file and determine information about it, such as its contents,
// front matter data, and output path.
const parsedMarkdownFiles = markdownFiles.map(Markdown.read);

const pageResults = pageFiles.map(function (filePath) {
  const localizedPath = filePath.replace(/^src\//, '');
  const outputPath = filePath.replace(/^src\/pages\//, 'build/');
  const contents = nunjucks.render(localizedPath, {
    parsedMarkdownFiles,
  });

  return {
    contents,
    outputPath,
  };
});

const markdownResults = parsedMarkdownFiles.map(function (markdownFile) {
  const contents = nunjucks.render('layouts/article.html', {
    articleTitle: markdownFile.frontMatter.title,
    date: format(markdownFile.frontMatter.date, 'yyyy-MM-dd'),
    markdownContent: markdownFile.rendered,
    pageTitle: markdownFile.frontMatter.title,
  });

  return {
    contents,
    outputPath: markdownFile.outputPath,
  };
});

// Create the build directory if necessary.
execSync('mkdir -p build');

pageResults.concat(markdownResults).forEach(function (result) {
  const outputDirname = path.dirname(result.outputPath);
  fs.mkdirSync(outputDirname, { recursive: true });
  fs.writeFileSync(result.outputPath, result.contents);
});

// Move every "static" file into the build directory.
execSync('cp -R src/static/ build');
