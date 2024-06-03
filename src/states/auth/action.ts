import { registerDataType } from '@/types/types'

function asyncUserRegister(data: registerDataType) {
    return async () => {
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}

export { asyncUserRegister }
