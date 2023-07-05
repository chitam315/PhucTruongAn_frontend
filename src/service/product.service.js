import { PRODUCT_API, api } from "../config/api";

export const productService = {
    getAllProducts(data) {
        console.log(PRODUCT_API);
        return api.get(`${PRODUCT_API}`)
    },
    getProductById(data) {
        
    }
}