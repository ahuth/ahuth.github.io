import fs from 'fs';
import nunjucks from 'nunjucks';
import path from 'path';
import { format, parseISO } from 'date-fns';
import { Type as Article } from './article';
import { Type as Page } from './page';

nunjucks.configure('src', { autoescape: false });

type Output = {
  content: string,
  path: string,
};

export function fromArticle(article: Article, analyticsId?: string): Output {
  const content = nunjucks.render('layouts/article.html', {
    analyticsId,
    articleTitle: article.title,
    date: format(parseISO(article.date), 'yyyy-MM-dd'),
    markdownContent: article.rendered,
    pageTitle: article.title,
  });

  return {
    content,
    path: path.join('build', article.subPath),
  };
}

export function fromPage(page: Page, articles: Article[], analyticsId?: string): Output {
  const content = nunjucks.render(page.localPath, {
    analyticsId,
    articles,
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
