import { PRODUCT_API, PRODUCT_ID_API, PRODUCT_IMAGE, PRODUCT_DESC, api } from "../config/api";

export const productService = {
<<<<<<< HEAD
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
=======
    getAllProducts(data) {
        return api.get(`${PRODUCT_API}`)
    },
    createProduct(data) {
        console.log(data);
        return api.post(`${PRODUCT_API}/create-product`,data)
    },
    deleteProductById(data){
        console.log(data);
        return api.delete(`${PRODUCT_API}/delete-product`,data)
    }
}
>>>>>>> cd9483ea5e025f0417dd27745efd318b00e28f79
