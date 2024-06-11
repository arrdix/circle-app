import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { VibeType } from '@/types/types'

import VibeItem from './VibeItem'
import EmptyMessage from '@/components/utilities/EmptyMessage'

interface VibeListProps {
    vibes: VibeType[]
}

function VibeList({ vibes }: VibeListProps) {
    if (vibes.length) {
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

    return <EmptyMessage header={'No vibe has been posted at this moment.'} />
}

export default VibeList
