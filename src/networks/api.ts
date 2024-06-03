import axios from 'axios'
import CONFIGS from '@/configs/configs'
import { LoginDataType, RegisterDataType } from '@/types/types'

class API {
    async REGISTER(data: RegisterDataType) {
        const response = await axios.post(`${CONFIGS.BASE_URL}/register`, {
            username: data.username,
            name: data.name,
            email: data.email,
            password: data.password,
        })

        const token = response.data.data
        this.SET_TOKEN(token)

        return token
    }

    async LOGIN(data: LoginDataType) {
        const response = await axios.post(`${CONFIGS.BASE_URL}/login`, {
            username: data.username,
            password: data.password,
        })

        return response.data.data
    }

    async GET_LOGGED_USER(token: string) {
        const response = await axios.get(`${CONFIGS.BASE_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response.data.data
    }

    SET_TOKEN(token: string) {
        localStorage.setItem('token', token)
    }

    GET_TOKEN() {
        return localStorage.getItem('token')
    }
}

export default new API()
