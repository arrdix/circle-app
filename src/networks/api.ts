import axios, { AxiosResponse } from 'axios'
import CONFIGS from '@/configs/configs'
import { LoginDataType, RegisterDataType, UserTypes } from '@/types/types'

class API {
    async REGISTER(data: RegisterDataType): Promise<AxiosResponse | undefined> {
        try {
            return await axios.post(`${CONFIGS.BASE_URL}/register`, {
                username: data.username,
                name: data.name,
                email: data.email,
                password: data.password,
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }
        }
    }

    async LOGIN(data: LoginDataType): Promise<string | undefined> {
        try {
            const response: AxiosResponse = await axios.post(`${CONFIGS.BASE_URL}/login`, {
                username: data.username,
                password: data.password,
            })

            const token: string = response.data.data.token
            this.SET_TOKEN(token)

            return token
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }
        }
    }

    async GET_LOGGED_USER(token: string): Promise<UserTypes> {
        const response: AxiosResponse = await axios.get(`${CONFIGS.BASE_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response.data.data
    }

    SET_TOKEN(payload: string): void {
        localStorage.setItem('token', payload)
    }

    GET_TOKEN(): string | null {
        return localStorage.getItem('token')
    }
}

export default new API()
