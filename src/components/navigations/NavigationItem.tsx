import { Text, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { fontSizing } from '../../styles/style'

import GhostButton from '../buttons/GhostButton'

interface NavigationItemProps {
    icon: ReactNode
    text: string
}

function NavigationItem({ icon, text }: NavigationItemProps) {
    return (
        <GhostButton>
            <Flex
                gap={'1rem'}
                alignItems={'center'}
                fontSize={fontSizing.biggest}
                color={'circle.font'}
            >
                {icon}
                <Text
                    as={'h1'}
                    fontSize={fontSizing.bigger}
                    fontWeight={'500'}
                    display={'flex'}
                    alignItems={'center'}
                    gap={'1rem'}
                    color={'circle.font'}
                >
                    {text}
                </Text>
            </Flex>
        </GhostButton>
    )
}

export default NavigationItem
