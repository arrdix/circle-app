import { Text, Button, Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { fontSizing } from '@/styles/style'

interface VibeItemButtonProps {
    icon: ReactNode
    value: number
    color: string
    hoverColor: string
}

function VibeItemButton({ icon, value, color, hoverColor }: VibeItemButtonProps) {
    function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        e.stopPropagation()
        e.preventDefault()

        console.log('Ok!')
    }

    return (
        <Button
            variant={'ghost'}
            display={'flex'}
            alignItems={'center'}
            gap={'.5rem'}
            color={color}
            padding={0}
            zIndex={1}
            _hover={{ color: hoverColor, background: 'transparent' }}
            onClick={(e) => onClickHandler(e)}
        >
            <Box fontSize={fontSizing.bigger}>{icon}</Box>
            <Text color={'circle.dark'} fontSize={fontSizing.small} fontWeight={'400'}>
                {value}
            </Text>
        </Button>
    )
}

export default VibeItemButton
