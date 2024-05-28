import { Box, Card } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface BrandCardProps {
    children: ReactNode
    top?: boolean
    noSpace?: boolean
    dark?: boolean
}

function BrandCard({ children, top, noSpace, dark }: BrandCardProps) {
    return (
        <Box margin={0} p={0} pl={noSpace ? 0 : '2rem'} mb={'1rem'} mt={top ? '2rem' : 0}>
            <Card
                color={'circle.font'}
                bg={dark ? 'circle.backdrop' : 'circle.darker'}
                borderRadius={'xl'}
                width={'100%'}
                padding={'1rem'}
            >
                {children}
            </Card>
        </Box>
    )
}

export default BrandCard
