const pool = require('../utils/pool.js');

class Book {
    id;
    title;
    cover_img;
    rating;
    price;
    inStock;


    constructor(book) {
        this.id = book.id;
        this.title = book.title;
        this.cover_img = book.cover_img;
        this.rating = book.rating;
        this.price = book.price;
        this.inStock = true;
    }

    static async insert(book) {
        const { rows } = await pool.query(
            'INSERT INTO books (title, cover_img, rating, price, inStock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [book.title, book.cover_img, book.rating, book.price, book.inStock])

            return new Book(rows[0]);
    }
}

module.exports = Book;