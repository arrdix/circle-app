import { Text, Button, Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { fontSizing } from '../../styles/style'

interface VibeItemButtonProps {
    icon: ReactNode
    value: number
    color: string
    hoverColor: string
}

function VibeItemButton({ icon, value, color, hoverColor }: VibeItemButtonProps) {
    return (
        <Button
            variant={'ghost'}
            display={'flex'}
            alignItems={'center'}
            gap={'.5rem'}
            color={color}
            padding={0}
            _hover={{ color: hoverColor, background: 'transparent' }}
        >
            <Box fontSize={fontSizing.bigger}>{icon}</Box>
            <Text color={'circle.dark'} fontSize={fontSizing.small} fontWeight={'400'}>
                {value}
            </Text>
        </Button>
    )
}

export default VibeItemButton
