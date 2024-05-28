import { getVibe } from '@/utils/api'
import { VibeType } from '@/types/types'
import { Box } from '@chakra-ui/react'

import VibeList from '@/components/vibes/VibeList'
import VibeItem from '@/components/vibes/VibeItem'
import NewVibe from '@/components/vibes/NewVibe'

interface VibeDetailProps {
    id: number
    withoutPhoto?: boolean
}

function VibeDetail({ id, withoutPhoto }: VibeDetailProps) {
    const vibe: VibeType | undefined = getVibe(id)

    if (vibe)
        return (
            <Box>
                <VibeItem
                    id={vibe.id}
                    content={vibe.content}
                    createdAt={vibe.createdAt}
                    likes={vibe.likes}
                    replies={vibe.replies}
                    isLiked={vibe.isLiked}
                    user={vibe.user}
                    withoutPhoto={withoutPhoto}
                />
                <NewVibe placeholder={'Post your reply'} buttonText={'Reply'} />
                <VibeList />
            </Box>
        )
}

export default VibeDetail
