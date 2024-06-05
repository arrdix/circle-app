import { DetailedVibeType } from '@/types/types'
import { Box, Flex, Text } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import VibeList from '@/components/vibes/VibeList'
import VibeItem from '@/components/vibes/VibeItem'
import NewVibe from '@/components/vibes/NewVibe'

interface VibeDetailProps {
    vibe: DetailedVibeType
}

function VibeDetail({ vibe }: VibeDetailProps) {
    const { replies, ...rest } = vibe

    if (!replies.length)
        return (
            <Box>
                <VibeItem vibe={rest} />
                <NewVibe placeholder={'Post your reply'} buttonText={'Reply'} />
                <Flex direction={'column'} alignItems={'center'} mt={'3rem'} width={'100%'}>
                    <Text fontSize={fontSizing.big} fontWeight={'600'} color={'circle.dark'}>
                        No replies to this vibe so far.
                    </Text>
                    <Text fontSize={fontSizing.normal} color={'circle.dark'}>
                        Share your thoughts first!
                    </Text>
                </Flex>
            </Box>
        )

    return (
        <Box>
            <VibeItem vibe={rest} />
            <NewVibe placeholder={'Post your reply'} buttonText={'Reply'} />
            <VibeList vibes={replies} />
        </Box>
    )
}

export default VibeDetail
