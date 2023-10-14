import {
  getElement,
  getProductsFromLocalStorage,
  storeProductsLocalStorage,
} from '../utils.js';
import displayCartItems from './displayCartItems.js';

let cartItems = getProductsFromLocalStorage('cart');
if (cartItems === null) {
  storeProductsLocalStorage('cart', []);
  cartItems = [];
}

const addToCart = function () {
  const products = getProductsFromLocalStorage('store');
  const addCartBtns = document.querySelectorAll('.add-cart-btn');
  const cart = getElement('.cart-overlay');

  addCartBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      cart.classList.add('show-cart');

      let selectedItem = products.filter((product) => {
        return product.id === id;
      });

      selectedItem = { amount: 1, ...selectedItem[0] };

      let currCart = getProductsFromLocalStorage('cart');

      if (
        currCart.find((product) => {
          return product.id === selectedItem.id;
        })
      ) {
        const index = currCart.findIndex((product) => {
          return product.id === selectedItem.id;
        });
        currCart[index].amount++;
      } else {
        currCart.push(selectedItem);
      }

      storeProductsLocalStorage('cart', currCart);
      displayCartItems(currCart);
    });
  });
};

export default addToCart;
