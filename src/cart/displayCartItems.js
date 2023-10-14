import { formatPrice, getElement } from '../utils.js';

const cartItemsContainer = getElement('.cart-items');
const cartTotal = getElement('.cart-total');
const cartCount = getElement('.cart-count');

const displayCartItems = (cartItems) => {
  cartCount.textContent = cartItems.reduce((total, curr) => {
    return total + curr.amount;
  }, 0);
  cartItemsContainer.innerHTML = cartItems
    .map((item) => {
      const { id, amount, fields } = item;
      const { name, price, image } = fields;
      const imageURL = image[0].thumbnails.large.url;

      if (amount === 0) return;

      return `<div class="cart-card">
                    <img src="${imageURL}" class="cart-item-img" alt="${name}">
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${name}</h4>
                        <p class="cart-item-price">${formatPrice(
                          price * amount
                        )}</p>
                        <button class="remove-cart-item-btn" data-id="${id}">remove</button>
                    </div>
                    <div class="cart-item-btns" data-id="${id}">
                        <button class="cart-increase-btn"><i class="fas fa-chevron-up"></i></button>
                        <span class="cart-item-count">${amount}</span>
                        <button class="cart-decrease-btn"><i class="fas fa-chevron-down"></i></button>
                    </div>
                </div>`;
    })
    .join('');
  calculatePrice(cartItems);
};

const calculatePrice = function (cartItems) {
  const totalPrice = cartItems.reduce((total, curr) => {
    return total + curr.amount * curr.fields.price;
  }, 0);
  cartTotal.textContent = `total : ${formatPrice(totalPrice)}`;
};

export default displayCartItems;
