import { LOGIN_API, api } from "../config/api";

export const authService = {
    login(data) {
        return api.post(`${LOGIN_API}`,data)
    }
}