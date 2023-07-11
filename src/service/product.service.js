import { PRODUCT_API, PRODUCT_ID_API, PRODUCT_IMAGE, PRODUCT_DESC, GET_CART, ADD_CART, api } from "../config/api";

export const productService = {

  getAllProducts(data) {
    return api.get(`${PRODUCT_API}`);
  },
  getProductById(data) {
    return api.post(`${PRODUCT_ID_API}`, { product_id: data });
  },
  getProductImage(data) {
    return api.post(`${PRODUCT_IMAGE}`, { product_id: data });
  },
  getProductDesc(data) {
    return api.post(`${PRODUCT_DESC}`, { product_id: data });
  },

};

export const cartService={
  getCartById(data) {
    return api.post(`${GET_CART}`);
  },
  postAddCart(data) {
    return api.post(`${ADD_CART}`);
  }
}