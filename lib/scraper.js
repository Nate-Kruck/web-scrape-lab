const request = require('../lib/request');
const store = require('../lib/store');
const parser = require('../lib/parser');

setInterval(() => {
    request()
      .then(document => parser(document))
      .then(books => store(books))
      .then(scrapedBooks => console.log(scrapedBooks.length));
}, 1000 * 60 * 15);

// scraper added