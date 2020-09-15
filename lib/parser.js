const parse = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];

  console.log(bookElements[0].querySelector('.image_container img').src.slice(3));

  return bookElements.flatMap(book => ({
    title: book.querySelector('h3 a').getAttribute('title'),
    cover_image: 'http://books.toscrape.com/' + book.querySelector('.image_container img').src.slice(3),
    rating: book.querySelector('.star-rating').getAttribute('class').split(' ')[1],
    price: book.querySelector('.product_price .price_color').textContent,
    in_stock: true
            
  }));
};

module.exports = parse;
