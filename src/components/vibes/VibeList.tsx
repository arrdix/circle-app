import { Box, Divider } from '@chakra-ui/react'
import { getVibes } from '../../utils/api'
import { VibeType } from '../../types/types'

import VibeItem from './VibeItem'

function VibeList() {
    const vibes: VibeType[] = getVibes()

    return (
        <Box>
            {vibes.map((vibe) => {
                return (
                    <Box key={vibe.id}>
                        <VibeItem
                            id={vibe.id}
                            vibe={vibe.vibe}
                            createdAt={vibe.createdAt}
                            likes={vibe.likes}
                            replies={vibe.replies}
                            isLiked={vibe.isLiked}
                            user={vibe.user}
                        />
                        <Divider border={'1ox'} borderColor={'circle.darker'} />
                    </Box>
                )
            })}
        </Box>
    )
}

export default VibeList
