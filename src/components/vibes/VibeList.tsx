import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { getVibes } from '../../utils/api'
import { VibeType } from '../../types/types'

import VibeItem from './VibeItem'

function VibeList() {
    const vibes: VibeType[] = getVibes()

    return (
        <Box>
            {vibes.map((vibe) => {
                return (
                    <Link to={`/detail/${vibe.id}`} key={vibe.id}>
                        <VibeItem
                            id={vibe.id}
                            content={vibe.content}
                            createdAt={vibe.createdAt}
                            likes={vibe.likes}
                            replies={vibe.replies}
                            isLiked={vibe.isLiked}
                            user={vibe.user}
                        />
                    </Link>
                )
            })}
        </Box>
    )
}

export default VibeList
