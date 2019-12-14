import hljs from 'highlight.js';
import markdownIt from 'markdown-it';
import matter from 'gray-matter';
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
  date: Date,
  outputPath: string,
  rendered: string,
  slug: string,
  title: string,
};

export type Type = Article;

export function read(filePath: string): Article {
  const frontMatter = matter.read(filePath);
  const rendererMarkdown = renderer.render(frontMatter.content);
  const outputPath = Paths.replaceExtension(filePath.replace('src/', 'build/'), 'html');

  return {
    date: frontMatter.data.date,
    outputPath,
    rendered: rendererMarkdown,
    slug: outputPath.replace('build/', ''),
    title: frontMatter.data.title,
  };
}
