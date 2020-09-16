const request = require('../request');
const store = require('../store');
const parser = require('../parser');

setInterval(() => {
  request()
    .then(html => parser(html))
    .then(books => store(books))
    .then(scrapedBooks => console.log(scrapedBooks.length));
}, 1000 * 60 * 15);

