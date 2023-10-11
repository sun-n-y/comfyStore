import './src/toggleSideBar.js';
import './src/toggleCart.js';
import { getElement } from './src/utils.js';
import fetchProducts from './src/fetchProducts.js';
import displayProducts from './src/displayProducts.js';
import cardBtns from './src/cardBtns.js';

const featuredSection = getElement('.featured-section');
const loading = getElement('.loading');

window.addEventListener('DOMContentLoaded', async () => {
  loading.textContent = 'loading...';
  const products = await fetchProducts();
  const featuredProducts = products.filter((product) => {
    return product.fields.featured === true;
  });
  featuredSection.innerHTML = displayProducts(featuredProducts);
  loading.textContent = '';

  cardBtns();
});
