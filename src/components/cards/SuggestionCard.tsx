import { Flex } from '@chakra-ui/react'

import AccountCard from './AccountCard'
import BrandCard from './BrandCard'
import BrandHeading from '@/components/utils/BrandHeading'

interface SuggestionCardProps {
    top?: boolean
}

function SuggestionCard({ top }: SuggestionCardProps) {
    return (
        <BrandCard top={top && top}>
            <BrandHeading text={'Suggested accounts'} />
            <Flex direction={'column'} gap={'1rem'}>
                <AccountCard followed />
                <AccountCard />
                <AccountCard />
            </Flex>
        </BrandCard>
    )
}

export default SuggestionCard
