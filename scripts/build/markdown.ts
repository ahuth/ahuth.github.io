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

type MarkdownFile = {
  date: string,
  frontMatter: { [key: string]: any },
  outputPath: string,
  rendered: string,
  slug: string,
};

export function read(filePath: string): MarkdownFile {
  const frontMatter = matter.read(filePath);
  const rendererMarkdown = renderer.render(frontMatter.content);
  const outputPath = Paths.replaceExtension(Paths.buildPath(filePath), 'html');

  return {
    date: frontMatter.data.date,
    frontMatter: frontMatter.data,
    outputPath,
    rendered: rendererMarkdown,
    slug: outputPath.replace('build/', ''),
  };
}
