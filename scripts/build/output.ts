import fs from 'fs';
import nunjucks from 'nunjucks';
import path from 'path';
import type { Article } from './article';
import type { Environment } from './environment';
import type { Page } from './page';
import type { Projects } from './projects';
import type { Secrets } from './secrets';
import * as Navigation from './navigation';

nunjucks.configure('src', { autoescape: false });

type Output = {
  content: string,
  path: string,
};

export function fromArticle(
  outputDirectory: string,
  article: Article,
  environment: Environment,
  secrets?: Secrets,
): Output {
  const content = nunjucks.render('layouts/article.html', {
    analyticsId: secrets?.analyticsId,
    articleTitle: article.title,
    date: article.formattedDate,
    markdownContent: article.rendered,
    navigation: Navigation.read(environment),
    pageTitle: article.title,
  });

  return {
    content,
    path: path.join(outputDirectory, article.subPath),
  };
}

export function fromPage(
  outputDirectory: string,
  page: Page,
  articles: Article[],
  projects: Projects,
  environment: Environment,
  secrets?: Secrets,
): Output {
  const content = nunjucks.render(page.localPath, {
    analyticsId: secrets?.analyticsId,
    articles,
    navigation: Navigation.read(environment),
    projects,
  });

  return {
    content,
    path: path.join(outputDirectory, page.subPath),
  };
}

export function write(output: Output): void {
  const outputDirname = path.dirname(output.path);
  fs.mkdirSync(outputDirname, { recursive: true });
  fs.writeFileSync(output.path, output.content);
}
