import { fontSizing } from '@/styles/style'
import { Input } from '@chakra-ui/react'

interface HollowInputProps {
    type: string
    placeholder: string
}

function HollowInput({ type, placeholder }: HollowInputProps) {
    return (
        <Input
            type={type}
            px={'1rem'}
            border={'1px'}
            borderColor={'circle.dark'}
            borderRadius={'lg'}
            placeholder={placeholder}
            fontSize={fontSizing.normal}
            color={'circle.font'}
            _active={{
                background: 'none',
                boxShadow: 'none',
                borderColor: 'circle.accent',
            }}
            _focus={{
                background: 'none',
                boxShadow: 'none',
                borderColor: 'circle.accent',
            }}
            _hover={{
                background: 'none',
                boxShadow: 'none',
                borderColor: 'circle.accent',
            }}
            _placeholder={{ color: 'circle.dark' }}
        />
    )
}

export default HollowInput
