import { getElement } from './utils.js';

const cartBtn = getElement('.cart-btn');
const cartCloseBtn = getElement('.cart-close-btn');
const cartOverlay = getElement('.cart-overlay');

cartBtn.addEventListener('click', function () {
  cartOverlay.classList.add('show-cart');
});

cartCloseBtn.addEventListener('click', function () {
  cartOverlay.classList.remove('show-cart');
});
