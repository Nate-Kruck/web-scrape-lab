const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async () => {
  const response = await fetch(
    'http://books.toscrape.com/catalogue/the-book-of-basketball-the-nba-according-to-the-sports-guy_232/index.html'
  );
  const html = await response.text();
  const dom = new JSDOM(html);

  return dom.window.document;
};

module.exports = request;
