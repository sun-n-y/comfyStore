import { productsURL } from './utils.js';

const fetchProducts = async () => {
  try {
    const response = await fetch(productsURL);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    throw new Error('error in fetch url');
  }
};

export default fetchProducts;
