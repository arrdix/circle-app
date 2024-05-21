import { Text, Flex } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

import SuggestionCardItem from './SuggestionCardItem'
import BrandCard from './BrandCard'

function SuggestionCard() {
    return (
        <BrandCard>
            <Text fontWeight={'700'} fontSize={fontSizing.big} mb={'1rem'}>
                Suggested accounts
            </Text>
            <Flex direction={'column'} gap={'1rem'}>
                <SuggestionCardItem />
                <SuggestionCardItem />
                <SuggestionCardItem />
            </Flex>
        </BrandCard>
    )
}

export default SuggestionCard
