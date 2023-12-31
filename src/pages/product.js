import '../toggleSideBar.js';
import '../toggleCart.js';
import addToCart from '../cart/addToCart.js';
import {
  formatPrice,
  getElement,
  getProductsFromLocalStorage,
  singleProductURL,
} from '../utils.js';
import displayCartItems from '../cart/displayCartItems.js';

let cartItems = getProductsFromLocalStorage('cart');

const singleProduct = getElement('.single-product');
const bannerContent = getElement('.banner-content');

const fetchSingleProduct = async () => {
  const searchId = window.location.search;
  const response = await fetch(`${singleProductURL}${searchId}`);
  const data = await response.json();
  const { id, fields } = data;
  const product = { id, ...fields };

  bannerContent.textContent = `home / ${product.name}`;

  singleProduct.innerHTML = `<img src="${
    product.image[0].thumbnails.large.url
  }" class="single-product-image">
        <div class="single-product-info">
            <h2 class="single-product-name">${product.name}</h2>
            <h4 class="single-product-company">${product.company}</h4>
            <h4 class="single-product-price">${formatPrice(product.price)}</h4>
            <div class="colors">${product.colors
              .map((color) => {
                return `<span class="color" style="background-color:${color};"></span>`;
              })
              .join('')}</div>
            <p class="single-product-text">${product.description}</p>
            <button class="btn add-cart-btn" data-id="${id}">add to cart</button>
        </div>`;
  addToCart();
};

fetchSingleProduct();
displayCartItems(cartItems);
