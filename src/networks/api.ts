import axios, { AxiosResponse } from 'axios'
import CONFIGS from '@/configs/configs'
import {
    DetailedVibeType,
    ForgotDataType,
    LoginDataType,
    RegisterDataType,
    ResetDataType,
    UserType,
    VibeType,
} from '@/types/types'

class API {
    async REGISTER(data: RegisterDataType): Promise<AxiosResponse> {
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

            throw error
        }
    }

    async LOGIN(data: LoginDataType): Promise<string> {
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

            throw error
        }
    }

    async GET_LOGGED_USER(): Promise<UserType> {
        try {
            const response: AxiosResponse = await axios.get(`${CONFIGS.BASE_URL}/me`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async FORGOT_PASSWORD(data: ForgotDataType): Promise<string> {
        try {
            const response: AxiosResponse = await axios.post(`${CONFIGS.BASE_URL}/auth/forgot`, {
                email: data.email,
            })

            return response.data.data.token
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async RESET_PASSWORD(data: ResetDataType, token: string): Promise<AxiosResponse> {
        try {
            return await axios.patch(
                `${CONFIGS.BASE_URL}/auth/reset`,
                {
                    password: data.newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async GET_ALL_VIBES(): Promise<VibeType[]> {
        try {
            const response = await axios.get(`${CONFIGS.BASE_URL}/vibes`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async GET_DETAILED_VIBE(id: number): Promise<DetailedVibeType> {
        try {
            const response = await axios.get(`${CONFIGS.BASE_URL}/vibes/${id}`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async POST_VIBE(data: FormData): Promise<string> {
        try {
            const response: AxiosResponse = await axios.post(`${CONFIGS.BASE_URL}/vibes`, data, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async GET_ALL_USERS(): Promise<UserType[]> {
        try {
            const response = await axios.get(`${CONFIGS.BASE_URL}/users`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async GET_USER(id: number): Promise<UserType> {
        try {
            const response = await axios.get(`${CONFIGS.BASE_URL}/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    SET_TOKEN(payload: string): void {
        localStorage.setItem('token', payload)
    }

    GET_TOKEN(): string | null {
        return localStorage.getItem('token')
    }
}

export default new API()
