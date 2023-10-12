import '../toggleSideBar.js';
import '../toggleCart.js';
import fetchProducts from '../fetchProducts.js';
import displayProducts from '../displayProducts.js';
import { getElement, getProductsFromLocalStorage } from '../utils.js';
import addToCart from '../cart/addToCart.js';

const productContainer = getElement('.products-container');
const searchForm = getElement('.input-form');
const searchInput = getElement('.search-input');
const companiesContainer = getElement('.companies');

window.addEventListener('DOMContentLoaded', async () => {
  let products = getProductsFromLocalStorage('store');
  if (!products) {
    products = await fetchProducts();
  }
  productContainer.innerHTML = displayProducts(products);
  addToCart();
  const companies = [
    'all',
    ...new Set(
      products.map((product) => {
        return product.fields.company;
      })
    ),
  ];
  companiesContainer.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join('');
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
