import { CardHeader, Text } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

interface VibeItemHeaderProps {
    name: string
    username: string
}

function VibeItemHeader({ name, username }: VibeItemHeaderProps) {
    return (
        <CardHeader display={'flex'} gap={'.5rem'} alignItems={'end'} padding={0}>
            <Text fontSize={fontSizing.small} fontWeight={'700'}>
                {name}
            </Text>
            <Text fontSize={fontSizing.small} color={'circle.dark'}>
                {username}
            </Text>
            <Text fontSize={fontSizing.small} color={'circle.dark'}>
                • 4h
            </Text>
        </CardHeader>
    )
}

export default VibeItemHeader
