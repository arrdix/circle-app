import { configureStore } from '@reduxjs/toolkit'
import loggedUserReducer from '@/features/auth/authSlice'
import isPreloadedReducer from '@/features/preloaded/preloadedSlice'
import vibesReducer from '@/features/vibes/vibesSlice'
import usersReducer from '@/features/users/usersSlice'

const store = configureStore({
    reducer: {
        loggedUser: loggedUserReducer,
        isPreloaded: isPreloadedReducer,
        vibes: vibesReducer,
        users: usersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
