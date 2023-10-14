import '../toggleSideBar.js';
import '../toggleCart.js';
import displayCartItems from '../cart/displayCartItems.js';
import { getProductsFromLocalStorage } from '../utils.js';

let cartItems = getProductsFromLocalStorage('cart');

window.addEventListener('DOMContentLoaded', () => {
  displayCartItems(cartItems);
});
