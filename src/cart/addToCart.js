import { getElement } from '../utils.js';

const addToCart = function () {
  const addCartBtn = getElement('.add-cart-btn');
  addCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('add to cart');
  });
};

export default addToCart;
