import '../toggleSideBar.js';
import '../toggleCart.js';
import displayProducts from '../displayProducts.js';
import { getElement, getProductsFromLocalStorage } from '../utils.js';

const productContainer = getElement('.products-container');

window.addEventListener('DOMContentLoaded', () => {
  const products = getProductsFromLocalStorage('store');
  productContainer.innerHTML = displayProducts(products);
});
