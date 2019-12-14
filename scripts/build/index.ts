import glob from 'glob';
import { execSync } from 'child_process';
import * as Article from './article';
import * as Output from './output';
import * as Page from './page';

const pageFiles = glob.sync('src/pages/**/*.html', { nodir: true });
const markdownFiles = glob.sync('src/pages/**/*.md', { nodir: true });

// Create the build directory if necessary.
execSync('mkdir -p build');

// Read each markdown article file, render the markdown into a nunkicks template, and write the
// file to the build directory.
const articles = markdownFiles.map(Article.read);
const articleResults = articles.map(Output.fromArticle);
articleResults.forEach(Output.write);

// Read each html page and write to the build directory.
const pages = pageFiles.map(Page.read);
const pageResults = pages.map(page => Output.fromPage(page, articles));
pageResults.forEach(Output.write);

// Move every "static" file into the build directory.
execSync('cp -R src/static/ build');
