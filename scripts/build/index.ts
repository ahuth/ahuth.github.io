import glob from 'glob';
import { execSync } from 'child_process';
import * as Article from './article';
import * as Output from './output';
import * as Page from './page';

const pageFiles = glob.sync('src/pages/**/*.html', { nodir: true });
const articleFiles = glob.sync('src/articles/**/*.md', { nodir: true });

// Create the build directory if necessary.
execSync('mkdir -p build');

// Read each markdown article file, render the markdown into a nunjucks template, and write the
// file to the build directory.
const articles = articleFiles.map(Article.read);
const articleOutput = articles.map(Output.fromArticle);
articleOutput.forEach(Output.write);

// Read each html page and write to the build directory.
const pages = pageFiles.map(Page.read);
const pageOutput = pages.map(page => Output.fromPage(page, articles));
pageOutput.forEach(Output.write);

// Move every "static" file into the build directory.
execSync('cp -R src/static/ build');
