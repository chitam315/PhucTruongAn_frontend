import { message } from 'antd'
import { createContext, useContext, useEffect, useState } from 'react'
import { authService } from '../../service/auth.service'
import { userService } from '../../service/user.service'
import { clearToken, clearUser, getUser, setToken, setUser } from '../../utils/token'

const AuthContext = createContext({})
/**
 * this useContext is use to control user,login,logout
 * @returns user, login, logout, setUser
 */
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [user, _setUser] = useState(getUser)

    useEffect(() => {
        setUser(user || null)
    }, [user])

    const login = async (data) => {
        try {
            const res = await authService.login(data)
            if (res.metadata) {
                setToken({
                    accessToken: res.metadata.accessToken,
                    refreshToken: res.metadata.refreshToken
                })
                getProfile(res.metadata.id)
            }
        } catch (error) {
            console.error(error)
            if (error?.response?.data?.message) {
                message.error(error.response.data.message)
            }
        }
    }

    const getProfile = async (id) => {
        const user = await userService.getUserById({id})
        _setUser(user.metadata)
        message.success('Log in successfully')
    }

    const logout = () => {
        clearToken()
        clearUser()
        _setUser(null)
        message.success('Log out successfully')
    }

    return <AuthContext.Provider value={{ user, login, logout, setUser: _setUser, getProfile }}>{children}</AuthContext.Provider>
}

export { useAuth, AuthProvider }