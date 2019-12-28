import glob from 'glob';
import { execSync } from 'child_process';
import * as Article from './article';
import * as Output from './output';
import * as Page from './page';

const pageFilePaths = glob.sync('src/pages/**/*.html', { nodir: true });
const articleFilePaths = glob.sync('src/articles/**/*.md', { nodir: true });

// Create the build directory if necessary.
execSync('mkdir -p build');

// Read each markdown article file, convert to html, and write to the build directory.
const articles = articleFilePaths.map(Article.read);
const articleOutput = articles.map(Output.fromArticle);
articleOutput.forEach(Output.write);

// Read each html page and write to the build directory.
const pages = pageFilePaths.map(Page.read);
const pageOutput = pages.map(page => Output.fromPage(page, articles));
pageOutput.forEach(Output.write);

// Move every "static" file into the build directory.
execSync('cp -R src/static/ build');
