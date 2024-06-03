import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserTypes } from '@/types/types'

interface AuthState {
    value?: UserTypes
}

const initialState: AuthState = {
    value: undefined,
}

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
        setLoggedUser: (state, action: PayloadAction<UserTypes>) => {
            state.value = action.payload
        },
        unsetLoggedUser: (state) => {
            state.value = undefined
        },
    },
})

export const { setLoggedUser, unsetLoggedUser } = loggedUserSlice.actions

export default loggedUserSlice.reducer
