import { PRODUCT_API, PRODUCT_ID_API, PRODUCT_IMAGE, PRODUCT_DESC, api, CATEGORY_API } from "../config/api";

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

  createProduct(data) {
    console.log(data);
    return api.post(`${PRODUCT_API}/create-product`, data)
  },
  deleteProductById(id) {
    return api.delete(`${PRODUCT_API}/delete-product`, {
      data: id
    })
  },
  updateProduct(data) {
    return api.put(`${PRODUCT_API}/update-product`, data)
  },

  getAllCategories() {
    return api.get(`${CATEGORY_API}`)
  }
};
