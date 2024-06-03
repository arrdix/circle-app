import axios from 'axios'
import CONFIGS from '@/configs/configs'
import { registerDataType } from '@/types/types'

class API {
    async REGISTER(data: registerDataType) {
        const response = await axios.post(`${CONFIGS.BASE_URL}/register`, {
            username: data.username,
            name: data.name,
            email: data.email,
            password: data.password,
        })

        return response
    }
}

export default new API()
