import { getElement } from './utils.js';

const cardBtns = function () {
  const singleProductBtn = getElement('.search-btn');
  const addCartBtn = getElement('.add-cart-btn');
  singleProductBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('single');
  });
  addCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('add to cart');
  });
};

export default cardBtns;
