import glob from 'glob';
import { execSync } from 'child_process';
import * as Article from './article';
import * as Environment from './environment';
import * as Output from './output';
import * as Page from './page';
import * as Projects from './projects';
import * as Secrets from './secrets';

const environment = Environment.read(process.env);
const secrets = Secrets.read('./secrets.json');
const pageFilePaths = glob.sync('src/pages/**/*.html', { nodir: true });
const articleFilePaths = glob.sync('content/articles/**/*.md', { nodir: true });
const projectsFilePath = 'content/projects.yml';
const outputDirectory = 'build';

// Create the build directory if necessary.
execSync('mkdir -p build');

// Get all projects. These aren't rendered as their own pages, but are passed to other pages.
const projects = Projects.read(projectsFilePath);

// Read each markdown article file, convert to html, and write to the build directory.
const articles = articleFilePaths.map((filePath) => Article.read(filePath, environment));
const articleOutput = articles.map((article) => Output.fromArticle(outputDirectory, article, secrets));
articleOutput.forEach(Output.write);

// Read each html page and write to the build directory.
const pages = pageFilePaths.map((filePath) => Page.read(filePath, environment));
const pageOutput = pages.map(page => Output.fromPage(outputDirectory, page, articles, projects, secrets));
pageOutput.forEach(Output.write);

// Move every "static" file into the build directory.
execSync('cp -R src/static/ build');
