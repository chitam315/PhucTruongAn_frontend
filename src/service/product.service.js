import { PRODUCT_API, api } from "../config/api";

export const productService = {
    getAllProducts(data) {
        return api.get(`${PRODUCT_API}`)
    },
    getProductById(data) {
        
    }
}