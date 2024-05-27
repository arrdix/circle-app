import { Button } from '@chakra-ui/react'
import { fontSizing, hollowButtonHover } from '@/styles/style'

interface HollowButtonProps {
    text: string
    dark?: boolean
}

function HollowButton({ text, dark }: HollowButtonProps) {
    return (
        <Button
            minWidth={'115px'}
            variant={'outline'}
            borderRadius={'2xl'}
            border={'2px'}
            px={'1.25rem'}
            fontSize={fontSizing.small}
            borderColor={dark ? 'circle.dark' : 'circle.font'}
            color={dark ? 'circle.dark' : 'color.font'}
            _hover={hollowButtonHover}
        >
            {text}
        </Button>
    )
}

export default HollowButton
