import { getElement } from '../utils.js';

const openCart = function () {
  const addCartBtns = document.querySelectorAll('.add-cart-btn');
  const cart = getElement('.cart-overlay');

  addCartBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      cart.classList.add('show-cart');
    });
  });
};

export default openCart;
