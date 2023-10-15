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
const cartItemsContainer = getElement('.cart-items');

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

cartItemsContainer.addEventListener('click', (e) => {
  let cartItems = getProductsFromLocalStorage('cart');
  if (e.target.classList.contains('remove-cart-item-btn')) {
    const id = e.target.dataset.id;
    const updateCart = cartItems.filter((item) => {
      return item.id != id;
    });
    storeProductsLocalStorage('cart', updateCart);
    displayCartItems(updateCart);
  }
  if (e.target.parentElement.classList.contains('cart-increase-btn')) {
    const id = e.target.parentElement.parentElement.dataset.id;
    cartItems.find((item) => {
      if (item.id === id) {
        item.amount++;
        return item;
      }
    });
    storeProductsLocalStorage('cart', cartItems);
    displayCartItems(cartItems);
  }
  if (e.target.parentElement.classList.contains('cart-decrease-btn')) {
    const id = e.target.parentElement.parentElement.dataset.id;
    cartItems.find((item) => {
      if (item.id === id) {
        item.amount--;
        return item;
      }
    });
    const updateCart = cartItems.filter((item) => {
      return item.amount != 0;
    });
    storeProductsLocalStorage('cart', updateCart);
    displayCartItems(updateCart);
  }
});
export default addToCart;
