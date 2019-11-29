import nunjucks from 'nunjucks';

nunjucks.configure('src');

const result = nunjucks.render('pages/index.html');
console.log(result);
