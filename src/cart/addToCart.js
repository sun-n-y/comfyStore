import {
  getElement,
  getProductsFromLocalStorage,
  storeProductsLocalStorage,
} from '../utils.js';

let cartItems = [];
const products = getProductsFromLocalStorage('store');

const addToCart = function () {
  const addCartBtns = document.querySelectorAll('.add-cart-btn');
  const cart = getElement('.cart-overlay');

  addCartBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = e.target.dataset.id;
      cartItems.push(
        products.filter((product) => {
          return product.id === id;
        })
      );
      storeProductsLocalStorage('cart', cartItems);
      cart.classList.add('show-cart');
    });
  });
};

export default addToCart;
