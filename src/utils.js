export function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`check element selector: ${selection}. it is wrong.`);
  }
}

export const productsURL = 'https://course-api.com/javascript-store-products';

export const singleProductURL =
  'https://course-api.com/javascript-store-single-product?id=';

export const storeProductsLocalStorage = function (name, products) {
  localStorage.setItem(name, JSON.stringify(products));
};

export const formatPrice = function (price) {
  let newCurrancy = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return newCurrancy;
};
