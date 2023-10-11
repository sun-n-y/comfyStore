import { getElement } from '../utils.js';

const addToCart = function () {
  const addCartBtn = getElement('.add-cart-btn');
  const cart = getElement('.cart-overlay');

  addCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cart.classList.add('show-cart');
  });
};

export default addToCart;
