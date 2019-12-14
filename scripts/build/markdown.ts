import hljs from 'highlight.js';
import markdownIt from 'markdown-it';

const markdown = markdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value;
    }
    return '';
  },
});

export function render(content: string) {
  return markdown.render(content);
}
