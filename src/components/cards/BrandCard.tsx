import { Container, Card } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface BrandCardProps {
    children: ReactNode
    top?: boolean
}

function BrandCard({ children, top }: BrandCardProps) {
    return (
        <Container p={0} pl={'2rem'} mb={'1rem'} mt={top ? '2rem' : 0}>
            <Card
                color={'circle.font'}
                bg={'circle.darker'}
                borderRadius={'xl'}
                width={'100%'}
                padding={'1rem'}
            >
                {children}
            </Card>
        </Container>
    )
}

export default BrandCard
