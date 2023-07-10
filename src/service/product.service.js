import { PRODUCT_API, api } from "../config/api";

export const productService = {
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