import './src/toggleSideBar.js';
import './src/toggleCart.js';
import { getElement } from './src/utils.js';
import fetchProducts from './src/fetchProducts.js';
import displayProducts from './src/displayProducts.js';

const featured = getElement('.featured');

window.addEventListener('DOMContentLoaded', async () => {
  const products = await fetchProducts();
  const featuredProducts = products.filter((product) => {
    return product.fields.featured === true;
  });
  featured.innerHTML = `<section class="featured-section">${displayProducts(
    featuredProducts
  )}</section>`;
});
