import { CATEGORY_API, PRODUCT_API, api } from "../config/api";

export const productService = {
    getAllProducts(data) {
        return api.get(`${PRODUCT_API}`)
    },
    createProduct(data) {
        console.log(data);
        return api.post(`${PRODUCT_API}/create-product`,data)
    },
    deleteProductById(id){
        return api.delete(`${PRODUCT_API}/delete-product`,{
            data: id
        })
    },
    updateProduct(data){
        return api.put(`${PRODUCT_API}/update-product`,data)
    },

    getAllCategories(){
        return api.get(`${CATEGORY_API}`)
    }
}