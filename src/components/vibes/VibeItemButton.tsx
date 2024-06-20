import { Text, Button, Box } from '@chakra-ui/react'
import { forwardRef, ReactNode } from 'react'
import { fontSizing } from '@/styles/style'

interface VibeItemButtonProps {
    onClick?: () => void
    icon: ReactNode
    value?: number
    color: string
    hoverColor: string
}

const VibeItemButton = forwardRef<HTMLButtonElement, VibeItemButtonProps>(
    ({ icon, value, color, hoverColor, onClick }, ref) => {
        function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
            e.stopPropagation()
            e.preventDefault()

            if (onClick) onClick()
        }

        return (
            <Button
                ref={ref}
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
)

export default VibeItemButton
