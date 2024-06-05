import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DetailedVibeType, VibeType } from '@/types/types'

interface VibesState {
    vibes: VibeType[]
    detailedVibe: DetailedVibeType | null
}

const initialState: VibesState = {
    vibes: [],
    detailedVibe: null,
}

const vibesSlice = createSlice({
    name: 'vibesSlice',
    initialState,
    reducers: {
        setVibes: (state, action: PayloadAction<VibeType[]>) => {
            state.vibes = action.payload
        },
        setDetailedVibe: (state, action: PayloadAction<DetailedVibeType>) => {
            state.detailedVibe = action.payload
        },
    },
})

export const { setVibes, setDetailedVibe } = vibesSlice.actions

export default vibesSlice.reducer
