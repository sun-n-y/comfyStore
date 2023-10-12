import '../toggleSideBar.js';
import '../toggleCart.js';
import fetchProducts from '../fetchProducts.js';
import displayProducts from '../displayProducts.js';
import { getElement, getProductsFromLocalStorage } from '../utils.js';
import addToCart from '../cart/addToCart.js';

const productContainer = getElement('.products-container');
const searchForm = getElement('.input-form');
const searchInput = getElement('.search-input');

window.addEventListener('DOMContentLoaded', async () => {
  let products = getProductsFromLocalStorage('store');
  if (!products) {
    products = await fetchProducts();
  }
  productContainer.innerHTML = displayProducts(products);
  addToCart();
});

searchForm.addEventListener('keyup', (e) => {
  e.preventDefault();
  const searchValue = searchInput.value;
  let products = getProductsFromLocalStorage('store');
  const filteredProducts = products.filter((product) => {
    if (product.fields.name.includes(searchValue)) {
      return product;
    }
  });
  if (filteredProducts.length < 1) {
    productContainer.innerHTML = `<h2>Sorry, No matches found</h2>`;
  } else {
    productContainer.innerHTML = displayProducts(filteredProducts);
    addToCart();
  }
});
