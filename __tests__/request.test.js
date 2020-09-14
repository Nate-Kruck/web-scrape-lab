const request = require('../lib/lib/request');

describe('request function', () => {
    it('makes a request to the book page and returns html', async() => {
        const document = await request();
        expect(
          document.querySelector('.product_pod h3 a').textContent
        ).toEqual('A Light in the ...');
    });
});

