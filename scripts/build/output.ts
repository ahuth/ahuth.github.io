import fs from 'fs';
import nunjucks from 'nunjucks';
import path from 'path';
import { Type as Article } from './article';
import { Type as Page } from './page';
import { Type as Projects } from './projects';
import { Type as Secrets } from './secrets';

nunjucks.configure('src', { autoescape: false });

type Output = {
  content: string,
  path: string,
};

export function fromArticle(article: Article, secrets?: Secrets): Output {
  const content = nunjucks.render('layouts/article.html', {
    analyticsId: secrets?.analyticsId,
    articleTitle: article.title,
    date: article.formattedDate,
    markdownContent: article.rendered,
    pageTitle: article.title,
  });

  return {
    content,
    path: path.join('build', article.subPath),
  };
}

export function fromPage(
  page: Page,
  articles: Article[],
  projects: Projects,
  secrets?: Secrets,
): Output {
  const content = nunjucks.render(page.localPath, {
    analyticsId: secrets?.analyticsId,
    articles,
    projects,
  });

  return {
    content,
    path: path.join('build', page.subPath),
  };
}

export function write(output: Output): void {
  const outputDirname = path.dirname(output.path);
  fs.mkdirSync(outputDirname, { recursive: true });
  fs.writeFileSync(output.path, output.content);
}
