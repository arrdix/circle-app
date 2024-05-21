import { Button } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { transparentHover } from '../../styles/style'

interface GlassButtonProps {
    children: ReactNode
    color?: string
}

function GhostButton({ children, color }: GlassButtonProps) {
    return (
        <Button
            padding={0}
            variant={'ghost'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'start'}
            minWidth={'none'}
            color={color ? color : undefined}
            _hover={transparentHover}
        >
            {children}
        </Button>
    )
}

export default GhostButton
