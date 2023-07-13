import { api, DELETE_CART } from "../config/api";

export const cartService = {
    deleteCartById(id){
        return api.delete(`${DELETE_CART}`,{
            data: {
                id: parseInt(id)
            }
        })
    }
}