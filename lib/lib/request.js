const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async () => {
  const response = await fetch(
    'http://books.toscrape.com/'
  );
  const html = await response.text();
  const dom = new JSDOM(html);

  return dom.window.document;
};

module.exports = request;
