const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async(page) => {
  const response = await fetch(`http://books.toscrape.com/catalogue/page-${page}.html`);
  const html = await response.text();
  const dom = new JSDOM(html);

  return dom.window.document;
};

module.exports = request;
