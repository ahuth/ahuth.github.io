import fs from 'fs';
import glob from 'glob';
import nunjucks from 'nunjucks';

nunjucks.configure('src');

const pageFiles = glob.sync('src/pages/**/*.html', { nodir: true });

const results = pageFiles.map(function (filePath) {
  const localizedPath = filePath.replace(/^src\//, '');
  const outputPath = filePath.replace(/^src\/pages\//, 'build/');
  const contents = nunjucks.render(localizedPath);
  return {
    contents,
    outputPath,
  };
});

if (!fs.existsSync('build/')) {
  fs.mkdirSync('build/');
}

results.forEach(function (result) {
  fs.writeFileSync(result.outputPath, result.contents);
});
