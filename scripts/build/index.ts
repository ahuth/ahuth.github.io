import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import nunjucks from 'nunjucks';
import path from 'path';
import { execSync } from 'child_process';
import { format } from 'date-fns';
import * as Markdown from './markdown';

nunjucks.configure('src', { autoescape: false });

const pageFiles = glob.sync('src/pages/**/*.html', { nodir: true });
const markdownFiles = glob.sync('src/pages/**/*.md', { nodir: true });

const parsedMarkdownFiles = markdownFiles.map(function (filePath) {
  const buildFilePath = filePath.replace(/^src\/pages\//, 'build/');

  const outputPath = path.join(
    path.dirname(buildFilePath),
    path.basename(buildFilePath, path.extname(buildFilePath)),
  ) + '.html';

  const file = fs.readFileSync(filePath);
  const parsedContent = matter(file);
  return {
    outputPath,
    parsedContent,
    slug: outputPath.replace('build/', ''),
  };
});

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

const markdownResults = parsedMarkdownFiles.map(function (parsedMarkdownFile) {
  const { outputPath, parsedContent } = parsedMarkdownFile;
  const markdownContent = Markdown.render(parsedContent.content);

  const contents = nunjucks.render('layouts/article.html', {
    articleTitle: parsedContent.data.title,
    date: format(parsedContent.data.date, 'yyyy-MM-dd'),
    markdownContent,
    pageTitle: parsedContent.data.title,
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
