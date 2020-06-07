import hljs from 'highlight.js';
import markdownIt from 'markdown-it';
import matter from 'gray-matter';
import { format, parseISO } from 'date-fns';
import * as Paths from './paths';

const renderer = markdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value;
    }
    return '';
  },
});

type Article = {
  date: string,
  formattedDate: string,
  rendered: string,
  subPath: string,
  title: string,
};

export type Type = Article;

export function read(filePath: string): Article {
  const frontMatter = matter.read(filePath);
  const rendererMarkdown = renderer.render(frontMatter.content);
  const subPath = Paths.replaceExtension(filePath.replace('src/', ''), 'html');
  const formattedDate = format(parseISO(frontMatter.data.date), 'yyyy-MM-dd');

  return {
    date: frontMatter.data.date,
    formattedDate,
    rendered: rendererMarkdown,
    subPath,
    title: frontMatter.data.title,
  };
}
