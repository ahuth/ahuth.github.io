import fs from 'fs';
import glob from 'glob';
import markdownIt from 'markdown-it';
import matter from 'gray-matter';
import nunjucks from 'nunjucks';
import path from 'path';
import { execSync } from 'child_process';
import replaceExtension from './replaceExtension';

nunjucks.configure('src', { autoescape: false });

const pageFiles = glob.sync('src/pages/**/*.html', { nodir: true });
const markdownFiles = glob.sync('src/pages/**/*.md', { nodir: true });

const pageResults = pageFiles.map(function (filePath) {
  const localizedPath = filePath.replace(/^src\//, '');
  const outputPath = filePath.replace(/^src\/pages\//, 'build/');
  const contents = nunjucks.render(localizedPath);

  return {
    contents,
    outputPath,
  };
});

const markdownResults = markdownFiles.map(function (filePath) {
  const outputPath = replaceExtension(filePath.replace(/^src\/pages\//, 'build/'), '.html');
  const file = fs.readFileSync(filePath);
  const grayMatter = matter(file);
  const markdownContent = markdownIt().render(grayMatter.content);
  const contents = nunjucks.render('layouts/markdown.html', {
    date: grayMatter.data.date,
    markdownContent,
    pageTitle: grayMatter.data.pageTitle,
  });

  return {
    contents,
    outputPath,
  };
});

execSync('mkdir -p build');

pageResults.concat(markdownResults).forEach(function (result) {
  const outputDirname = path.dirname(result.outputPath);
  fs.mkdirSync(outputDirname, { recursive: true });
  fs.writeFileSync(result.outputPath, result.contents);
});

execSync('cp -R src/static/ build');
