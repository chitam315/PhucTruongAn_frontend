import { LOGIN_API, api, REFRESH_TOKEN_API, REGISTER_API } from "../config/api";
import { getToken } from "../utils/token";

export const authService = {
    login(data) {
        return api.post(`${LOGIN_API}`,data)
    },
    refreshToken(){
        return api.post(`${REFRESH_TOKEN_API}`,{
            refreshToken: getToken().refreshToken
        })
    },
    register(data){
        return api.post(`${REGISTER_API}`,data)
    }
}