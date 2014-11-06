page = location.pathname.split('/').pop();
name = page.split('.').shift();
number = name.replace('page', '');
nextPage.href = 'page'+ (parseInt(number)+1) + '.html';
previousPage.href = 'page'+ (parseInt(number)-1) + '.html';
