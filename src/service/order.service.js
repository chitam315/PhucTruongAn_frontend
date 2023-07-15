import { api, USER_API } from "../config/api";

export const userService = {
    getUserById(data){
        return api.post(`${USER_API}/get-user-by-id`,data)
    },
    getAllUser() {
        return api.get(`${USER_API}/get-all-user`)
    }
}