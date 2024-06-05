import { CardHeader, Text } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'
import { dateFormatter } from '@/utils/dateFormatter'

interface VibeItemHeaderProps {
    name: string
    username: string
    date: string
}

function VibeItemHeader({ name, username, date }: VibeItemHeaderProps) {
    return (
        <CardHeader display={'flex'} gap={'.5rem'} alignItems={'end'} padding={0}>
            <Text fontSize={fontSizing.small} fontWeight={'700'}>
                {name}
            </Text>
            <Text fontSize={fontSizing.small} color={'circle.dark'}>
                {username}
            </Text>
            <Text fontSize={fontSizing.small} color={'circle.dark'}>
                &#8226; {dateFormatter(date)}
            </Text>
        </CardHeader>
    )
}

export default VibeItemHeader
