import { getElement, getProductsFromLocalStorage } from '../utils.js';

const products = getProductsFromLocalStorage('store');

const addToCart = function () {
  const addCartBtns = document.querySelectorAll('.add-cart-btn');
  const cart = getElement('.cart-overlay');

  addCartBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = e.target.dataset.id;
      const selectedItem = {
        amount: 1,
        ...products.filter((product) => {
          return product.id === id;
        }),
      };
      console.log(selectedItem);
      cart.classList.add('show-cart');
    });
  });
};

export default addToCart;
