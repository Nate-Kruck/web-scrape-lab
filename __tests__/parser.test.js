const request = require('../lib/request');
const parse = require('../lib/parser');

describe('parse function', () => {
    it('returns an array of books, title, cover_image, rating, price and boolean for if the book is instock or not', async() => {
        
        const document = await request();

        const bookInfo = await parse(document);

        expect(bookInfo).toEqual(expect.arrayContaining([
            { title: 'A Light in the Attic', cover_image: 'http://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', rating: 'Three', price: '£51.77', in_stock: true },
            { title: 'Tipping the Velvet', cover_image: 'http://books.toscrape.com/media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg', rating: 'One', price: '£53.74', in_stock: true } 
        ]));
    });
});

