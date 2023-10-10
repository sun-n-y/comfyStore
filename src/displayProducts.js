import { singleProductURL } from './utils.js';

const displayProducts = (products) => {
  const productsArray = products
    .map((product) => {
      const { id, fields } = product;
      const { image, name, price } = fields;
      const img = image[0].thumbnails.large.url;
      return `<article class="featured-card">
                <img src="${img}" class="featured-img" alt="${name}">
                <h4>${name}</h4>
                <p>$${price}</p>
                <div class="featured-card-btns">
                    <a href="./product.html?id=${id}" class="search-btn">
                        <i class="fas fa-search"></i>
                    </a>
                    <i class="fas fa-shopping-cart add-cart-btn"></i>
                </div>
            </article>`;
    })
    .join('');
  return productsArray;
};

export default displayProducts;
