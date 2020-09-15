const fs = require('fs');
const pool = require('../lib/utils/pool');
const store = require('../lib/store');

describe('store function', () => {
    beforeEach(() => {
        return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
    });

    it('takes an array of books and saves them in the db', async() => {
        const books = [
            { title: 'book1', cover_img: 'random photo', rating: 'One', price: '$20', in_stock: true },
            { title: 'book2', cover_img: 'random photo2', rating: 'Two', price: '$40', in_stock: true },
            { title: 'book3', cover_img: 'random photo3', rating: 'Three', price: '$60', in_stock: true },
            { title: 'book4', cover_img: 'random photo4', rating: 'Four', price: '$80', in_stock: true },
        ];

        await store(books);

        const { rows } = await pool.query('SELECT * FROM books');

        expect(rows.length).toEqual(4);
    });
});