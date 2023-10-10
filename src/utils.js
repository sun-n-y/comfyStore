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
  'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';
