import './src/toggleSideBar.js';
import './src/toggleCart.js';
import fetchProducts from './src/fetchProducts.js';
import { getElement } from './src/utils.js';

const featured = getElement('.featured');
const featuredSection = getElement('.featured-section');

window.addEventListener('DOMContentLoaded', async () => {
  featured.innerHTML = `<h2 class="error">Loading...</h2>`;
  const products = await fetchProducts();
  const featuredProducts = products.filter((product) => {
    return product.fields.featured === true;
  });
});
