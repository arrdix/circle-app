import { Link } from 'react-router-dom'
import { Box, Flex, Text } from '@chakra-ui/react'
import { VibeType } from '@/types/types'
import { fontSizing } from '@/styles/style'

import VibeItem from './VibeItem'

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

    return (
        <Flex direction={'column'} alignItems={'center'} mt={'3rem'} width={'100%'}>
            <Text fontSize={fontSizing.big} fontWeight={'600'} color={'circle.dark'}>
                No vibes has been posted at this moment.
            </Text>
        </Flex>
    )
}

export default VibeList
