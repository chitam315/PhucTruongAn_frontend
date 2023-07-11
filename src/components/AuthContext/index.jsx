import { message } from 'antd'
import { createContext, useContext, useEffect, useState } from 'react'
import { authService } from '../../service/auth.service'
import { userService } from '../../service/user.service'
import { clearToken, clearUser, getUser, setToken, setUser } from '../../utils/token'
import { useNavigate } from 'react-router'

const AuthContext = createContext({})
/**
 * this useContext is use to control user,login,logout
 * @returns user, login, logout, setUser
 */
const useAuth = () => useContext(AuthContext)


const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, _setUser] = useState(getUser)

    useEffect(() => {
        setUser(user || null)
    }, [user])

    const login = async (data) => {
        try {
            const res = await authService.login(data)
            console.log(res);
            if (res.data.metadata.status == 404) {
                message.error('Incorrect username or password')
            } else {
                await setToken({
                    accessToken: res.data.metadata.accessToken,
                    refreshToken: res.data.metadata.refreshToken
                })
                getProfile(res.data.metadata.id)
                navigate("")
            }
        } catch (error) {
            console.error(error)
            message.error('Server has the problem')
            if (error?.response?.data?.message) {
                message.error(error.response.data.message)
            }
        }
    }

    const getProfile = async (id) => {
        try {
            const user = await userService.getUserById({ id })
            console.log(user);
            _setUser(user.data.metadata)
            message.success('Log in successfully')
        } catch (error) {
            throw error
        }

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