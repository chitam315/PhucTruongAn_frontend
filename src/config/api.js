// import { authService } from "@/services/auth.service";
// import { handleError } from "@/utils/handleError";
import axios from "axios";
import { getToken } from "../utils/token";
// import dotenv from "dotenv";

// dotenv.config({ path: ".env" });

export const LOGIN_API = process.env.REACT_APP_LOGIN_API
export const USER_API = process.env.REACT_APP_USER_API
export const PRODUCT_API = process.env.REACT_APP_PRODUCT_API
export const PRODUCT_ID_API = process.env.REACT_APP_PRODUCT_ID_API
export const PRODUCT_IMAGE = process.env.REACT_APP_IMAGE_API
export const PRODUCT_DESC = process.env.REACT_APP_DESC_API
export const GET_CART = process.env.REACT_APP_GET_CART
export const ADD_CART = process.env.REACT_APP_ADD_CART
export const DELETE_CART = process.env.REACT_APP_DELETE_CART
export const UPDATE_CART = process.env.REACT_APP_UPDATE_CART

export const api = axios.create()

api.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = `Bearer ${token.accessToken}`
    }
    config.headers['x-api-key'] = process.env.REACT_APP_API_KEY
    config.headers['x-api-id'] = process.env.REACT_APP_API_ID
    return config
})