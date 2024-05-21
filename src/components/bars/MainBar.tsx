import { Box, Heading, Divider } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

import VibeList from '../vibes/VibeList'
import NewVibe from '../vibes/NewVibe'

function MainBar() {
    return (
        <Box border={'1px'} borderColor={'circle.darker'}>
            <Heading px={'1rem'} pt={'2rem'} pb={'1rem'} fontSize={fontSizing.bigger}>
                Home
            </Heading>
            <NewVibe />
            <Divider border={'1ox'} borderColor={'circle.darker'} />
            <VibeList />
        </Box>
    )
}

export default MainBar
