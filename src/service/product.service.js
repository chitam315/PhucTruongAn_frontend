import {
  PRODUCT_API,
  PRODUCT_ID_API,
  PRODUCT_IMAGE,
  PRODUCT_DESC,
  CATEGORY_API,
  GET_CART,
  ADD_CART,
  DELETE_CART,
  UPDATE_CART,
  api,
} from "../config/api";

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

  getCartById(data) {
    return api.post(`${GET_CART}`, { id: data });
  },
  createAddCart(data) {
    return api.post(`${ADD_CART}`, data);
  },
  delCart(data) {
    return api.post(`${DELETE_CART}`, { data: data });
  },
  updateCart(data) {
    return api.post(`${UPDATE_CART}`, data);
  },
  createProduct(data) {
    console.log(data);
    return api.post(`${PRODUCT_API}/create-product`, data);
  },
  deleteProductById(id) {
    return api.delete(`${PRODUCT_API}/delete-product`, {
      data: id,
    });
  },
  updateProduct(data) {
    return api.put(`${PRODUCT_API}/update-product`, data);
  },

  getAllCategories() {
    return api.get(`${CATEGORY_API}`);
  },
};
