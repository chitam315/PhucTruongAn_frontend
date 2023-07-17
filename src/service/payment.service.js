import { api, PAYMENT_API } from "../config/api"

export const paymentService = {
    createPayment(data){
        return api.post(`${PAYMENT_API}/create-payments`,data)
    },
    getAllPayment(){
        return api.get(`${PAYMENT_API}/get-all-payments`)
    },
    updatePaymentStatus(data){
        return api.post(`${PAYMENT_API}/update-payment-status`,data)
    }
}