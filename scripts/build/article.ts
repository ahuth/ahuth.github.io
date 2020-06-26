import hljs from 'highlight.js';
import markdownIt from 'markdown-it';
import matter from 'gray-matter';
import path from 'path';
import { format, parseISO } from 'date-fns';
import type { Environment } from './environment';
import * as Paths from './paths';

const renderer = markdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value;
    }
    return '';
  },
});

export type Article = {
  date: string,
  formattedDate: string,
  rendered: string,
  subPath: string,
  title: string,
  url: string,
};

export function read(filePath: string, environment: Environment): Article {
  const frontMatter = matter.read(filePath);
  const rendererMarkdown = renderer.render(frontMatter.content);
  const formattedDate = format(parseISO(frontMatter.data.date), 'yyyy-MM-dd');
  const subPath = Paths.replaceExtension(filePath.replace('content/', ''), 'html');
  const url = path.join(environment.urlRoot, subPath);

  return {
    date: frontMatter.data.date,
    formattedDate,
    rendered: rendererMarkdown,
    subPath,
    title: frontMatter.data.title,
    url,
  };
}
