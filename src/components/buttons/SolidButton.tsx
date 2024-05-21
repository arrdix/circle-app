import { Button } from '@chakra-ui/react'
import { solidButtonHover } from '../../styles/style'

interface SolidButtonProps {
    text: string
}

function SolidButton({ text }: SolidButtonProps) {
    return (
        <Button
            width={'100%'}
            borderRadius={'2xl'}
            bg={'circle.accent'}
            color={'circle.font'}
            _hover={solidButtonHover}
        >
            {text}
        </Button>
    )
}

export default SolidButton
