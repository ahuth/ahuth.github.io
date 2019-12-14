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

type ArticleFile = {
  date: Date,
  outputPath: string,
  rendered: string,
  slug: string,
  title: string,
};

export function read(filePath: string): ArticleFile {
  const frontMatter = matter.read(filePath);
  const rendererMarkdown = renderer.render(frontMatter.content);
  const outputPath = Paths.replaceExtension(Paths.buildPath(filePath), 'html');

  return {
    date: frontMatter.data.date,
    outputPath,
    rendered: rendererMarkdown,
    slug: outputPath.replace('build/', ''),
    title: frontMatter.data.title,
  };
}
