import { fontSizing, solidInputHover } from '@/styles/style'
import { Input } from '@chakra-ui/react'

interface SolidInputProps {
    type: string
    placeholder: string
    value?: string
}

function SolidInput({ type, placeholder, value }: SolidInputProps) {
    return (
        <Input
            type={type}
            variant={'filled'}
            px={'1rem'}
            bg={'circle.darker'}
            borderRadius={'lg'}
            placeholder={placeholder}
            value={value}
            fontSize={fontSizing.small}
            color={'circle.font'}
            _active={solidInputHover}
            _focus={solidInputHover}
            _hover={solidInputHover}
            _placeholder={{ color: 'circle.dark' }}
        />
    )
}

export default SolidInput
