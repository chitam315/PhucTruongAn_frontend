<<<<<<< HEAD
<<<<<<< HEAD
import { PRODUCT_API, PRODUCT_ID_API, PRODUCT_IMAGE, PRODUCT_DESC, api, CATEGORY_API } from "../config/api";
=======
<<<<<<< HEAD
import { PRODUCT_API, PRODUCT_ID_API, PRODUCT_IMAGE, PRODUCT_DESC, GET_CART, ADD_CART, api } from "../config/api";

export const productService = {

=======
import { CATEGORY_API, PRODUCT_API, api } from "../config/api";
import { PRODUCT_API, PRODUCT_ID_API, PRODUCT_IMAGE, PRODUCT_DESC, api } from "../config/api";
>>>>>>> e517a349484fc8d1bdc7d3b8af56f087a25215cc

export const productService = {
>>>>>>> 158529a64367165d160e0565253d735896f1d4fc
=======
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
>>>>>>> e33d8c88fd4a8d04ce46ad908839c0ca90df8677
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
