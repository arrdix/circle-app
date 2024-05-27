import { Button } from '@chakra-ui/react'
import { fontSizing, hollowButtonHover } from '@/styles/style'

interface HollowButtonProps {
    text: string
}

function HollowButton({ text }: HollowButtonProps) {
    return (
        <Button
            variant={'outline'}
            borderRadius={'2xl'}
            border={'2px'}
            px={'1.75rem'}
            fontSize={fontSizing.small}
            color={'circle.font'}
            _hover={hollowButtonHover}
        >
            {text}
        </Button>
    )
}

export default HollowButton
