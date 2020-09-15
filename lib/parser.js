const parse = document => {
    const bookElements = [...document.querySelectorAll('.product_pod')];

    return bookElements.flatMap(book => ({
        title: book.querySelector('h3 a').getAttribute('title'),
        cover_image: 'http://books.toscrape.com/' + book.querySelector('.image_container img').src,
        rating: book.querySelector('.star-rating').getAttribute('class').split(' ')[1],
        price: book.querySelector('.product_price .price_color').textContent,
        in_stock: true
            
        }));
    };

module.exports = parse;