import { Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { fontSizing } from '../../styles/style'

import GhostButton from '../buttons/GhostButton'

interface NavigationHeadingProps {
    icon?: ReactNode
    text: string
}

function NavigationHeading({ icon, text }: NavigationHeadingProps) {
    return (
        <Box px={'1rem'} pt={'2rem'} pb={'1rem'}>
            <GhostButton color="circle.font" fontSize={'2rem'}>
                {icon}
                <Heading fontSize={fontSizing.bigger}>{text}</Heading>
            </GhostButton>
        </Box>
    )
}

export default NavigationHeading
