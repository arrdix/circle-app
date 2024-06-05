import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { VibeType } from '@/types/types'

import VibeItem from './VibeItem'

interface VibeListProps {
    vibes: VibeType[]
}

function VibeList({ vibes }: VibeListProps) {
    return (
        <Box>
            {vibes.map((vibe) => {
                return (
                    <Link to={`/detail/${vibe.id}`} key={vibe.id}>
                        <VibeItem vibe={vibe} />
                    </Link>
                )
            })}
        </Box>
    )
}

export default VibeList
