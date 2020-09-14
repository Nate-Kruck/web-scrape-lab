const request = require('../lib/lib/request');

describe('request function', () => {
    it('makes a request to the Book of Basketball page and returns html', async() => {
        const document = await request();
        expect(
          document.querySelector(".content p.price_color").textContent
        ).toEqual('£44.84');
    });
});