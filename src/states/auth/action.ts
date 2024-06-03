import API from '@/networks/api'
import { registerDataType } from '@/types/types'

function asyncUserRegister(data: registerDataType) {
    return async () => {
        try {
            await API.REGISTER(data)
        } catch (error) {
            alert(error)
        }
    }
}

export { asyncUserRegister }
