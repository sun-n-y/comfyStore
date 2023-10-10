import { productsURL, storeProductsLocalStorage } from './utils.js';

const fetchProducts = async () => {
  try {
    const response = await fetch(productsURL);
    if (response.ok) {
      const data = await response.json();
      storeProductsLocalStorage('store', data);
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    throw new Error('error in fetch url');
  }
};

export default fetchProducts;
