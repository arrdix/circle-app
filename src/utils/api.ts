import { VibeType } from '../types/types'
import dummy from '../data/dummy.json'

export function getVibes(): VibeType[] {
    return dummy.data.vibes
}

export function getVibe(id: number): VibeType | undefined {
    const vibes: VibeType[] = dummy.data.vibes

    return vibes.find((vibe) => vibe.id === id)
}
