import nunjucks from 'nunjucks';

nunjucks.configure('src');

const result = nunjucks.render('index.html');
console.log(result);
