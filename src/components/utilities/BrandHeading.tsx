import { fontSizing } from '@/styles/style'
import { Heading } from '@chakra-ui/react'

interface BrandHeadingProps {
    text: string
}

function BrandHeading({ text }: BrandHeadingProps) {
    return (
        <Heading fontWeight={'700'} fontSize={fontSizing.big} mb={'1rem'}>
            {text}
        </Heading>
    )
}

export default BrandHeading
