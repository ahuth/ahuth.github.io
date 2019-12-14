import fs from 'fs';
import glob from 'glob';
import hljs from 'highlight.js';
import markdownIt from 'markdown-it';
import matter from 'gray-matter';
import nunjucks from 'nunjucks';
import path from 'path';
import { execSync } from 'child_process';
import replaceExtension from './replaceExtension';

nunjucks.configure('src', { autoescape: false });

const pageFiles = glob.sync('src/pages/**/*.html', { nodir: true });
const markdownFiles = glob.sync('src/pages/**/*.md', { nodir: true });

const markdown = markdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value;
    }
    return '';
  },
});

const parsedMarkdownFiles = markdownFiles.map(function (filePath) {
  const outputPath = replaceExtension(filePath.replace(/^src\/pages\//, 'build/'), '.html');
  const file = fs.readFileSync(filePath);
  const parsedContent = matter(file);
  return {
    outputPath,
    parsedContent,
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
  const markdownContent = markdown.render(parsedContent.content);

  const contents = nunjucks.render('layouts/markdown.html', {
    date: parsedContent.data.date,
    markdownContent,
    pageTitle: parsedContent.data.pageTitle,
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
