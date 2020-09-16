/* eslint-disable no-console */
const request = require('./request');
const parser = require('./parser');
const store = require('./store');

module.exports = job => {
  console.log(`Just scraping that data ${job.data.page}`);
  return request(job.data.page)
    .then(parser)
    .then(store);
};
