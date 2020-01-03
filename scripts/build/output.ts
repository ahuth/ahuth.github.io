import fs from 'fs';
import nunjucks from 'nunjucks';
import path from 'path';
import { format } from 'date-fns';
import { Type as Article } from './article';
import { Type as Page } from './page';

nunjucks.configure('src', { autoescape: false });

type Output = {
  content: string,
  path: string,
};

export function fromArticle(article: Article): Output {
  const content = nunjucks.render('layouts/article.html', {
    articleTitle: article.title,
    date: format(article.date, 'yyyy-MM-dd'),
    markdownContent: article.rendered,
    pageTitle: article.title,
  });

  return {
    content,
    path: path.join('build', article.subPath),
  };
}

export function fromPage(page: Page, articles: Article[]): Output {
  const content = nunjucks.render(page.localizedPath, {
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
