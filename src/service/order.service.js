import { api, ORDER_API } from "../config/api";

export const orderService = {
    getOrderByUser(data){
        return api.post(`${ORDER_API}/get-order-by-user-id`,data)
    },
    getAllOrder() {
        return api.get(`${ORDER_API}/get-all-orders`)
    },
    createOrder(data) {
        return api.post(`${ORDER_API}/create-order`,data)
    }
}