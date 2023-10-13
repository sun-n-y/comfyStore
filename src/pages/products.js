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
const rangeInput = getElement('.range-input');
const rangeValue = getElement('.range-value');

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
    productContainer.innerHTML = `<h3>Sorry, no matches found</h3>`;
  } else {
    productContainer.innerHTML = displayProducts(filteredProducts);
    addToCart();
  }
});

companiesContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('company-btn')) {
    searchInput.value = '';
    const value = e.target.textContent;
    let products = getProductsFromLocalStorage('store');
    if (value === 'all') {
      productContainer.innerHTML = displayProducts(products);
    } else {
      const filteredProducts = products.filter((product) => {
        if (product.fields.company === value) {
          return product;
        }
      });
      productContainer.innerHTML = displayProducts(filteredProducts);
    }
  }
  addToCart();
});

rangeInput.addEventListener('input', () => {
  searchInput.value = '';
  const rangeInputValue = parseInt(rangeInput.value);
  let products = getProductsFromLocalStorage('store');
  const prices = products.map((product) => {
    return parseInt((product.fields.price + 1).toString().slice(0, 2));
  });

  rangeInput.max = Math.max(...prices);
  rangeInput.min = Math.min(...prices);
  rangeValue.textContent = `value : $${rangeInputValue}`;

  const filteredProducts = products.filter((product) => {
    return (
      parseInt((product.fields.price + 1).toString().slice(0, 2)) <=
      rangeInputValue
    );
  });
  if (filteredProducts.length < 1) {
    productContainer.innerHTML = `<h3>Sorry, no matches found</h3>`;
  } else {
    productContainer.innerHTML = displayProducts(filteredProducts);
  }
  addToCart();
});
