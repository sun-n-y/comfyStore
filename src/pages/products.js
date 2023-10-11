import '../toggleSideBar.js';
import '../toggleCart.js';
import fetchProducts from '../fetchProducts.js';
import displayProducts from '../displayProducts.js';
import { getElement, getProductsFromLocalStorage } from '../utils.js';
import cardBtns from '../cardBtns.js';

const productContainer = getElement('.products-container');
const loading = getElement('.loading');

window.addEventListener('DOMContentLoaded', async () => {
  loading.textContent = 'loading...';
  let products = getProductsFromLocalStorage('store');
  if (!products) {
    products = await fetchProducts();
  }
  productContainer.innerHTML = displayProducts(products);
  cardBtns();
});
