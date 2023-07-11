// import { authService } from "@/services/auth.service";
// import { handleError } from "@/utils/handleError";
import axios from "axios";
import { getToken, setToken } from "../utils/token";
import { authService } from "../service/auth.service";
// import dotenv from "dotenv";

// dotenv.config({ path: ".env" });

export const LOGIN_API = process.env.REACT_APP_LOGIN_API
export const USER_API = process.env.REACT_APP_USER_API
export const PRODUCT_API = process.env.REACT_APP_PRODUCT_API
export const REFRESH_TOKEN_API = process.env.REACT_APP_REFRESH_TOKEN_API
export const CATEGORY_API = process.env.REACT_APP_CATEGORIES_API
export const PRODUCT_ID_API = process.env.REACT_APP_PRODUCT_ID_API
export const PRODUCT_IMAGE = process.env.REACT_APP_IMAGE_API
export const PRODUCT_DESC = process.env.REACT_APP_DESC_API

export const api = axios.create()
api.interceptors.response.use((res) => {
    return res
}, async (err) => {
    console.log(err);
    if(err?.response?.data == "Token is not vaild"){
        console.log("token expired");
        try {
            const res = await authService.refreshToken()
            console.log(res);
            if (res.data.metadata.accessToken) {
                setToken({
                    accessToken: res.data.metadata.accessToken,
                    refreshToken: res.data.metadata.refreshToken
                })
            }
            return api(err.config)
        } catch (error) {
            console.log(error);
        }
    }
    // throw err
})

api.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = `Bearer ${token.accessToken}`
    }
    config.headers['x-api-key'] = process.env.REACT_APP_API_KEY
    config.headers['x-api-id'] = process.env.REACT_APP_API_ID
    return config
})