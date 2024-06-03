import { configureStore } from '@reduxjs/toolkit'
import loggedUserReducer from '@/features/auth/authSlice'

const store = configureStore({
    reducer: {
        loggedUser: loggedUserReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
