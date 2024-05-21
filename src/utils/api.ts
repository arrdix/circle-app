import { VibeType } from '../types/types'
import dummy from '../data/dummy.json'

export function getVibes(): VibeType[] {
    return dummy.data.vibes
}
