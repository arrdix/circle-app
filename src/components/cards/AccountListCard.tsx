import { Flex } from '@chakra-ui/react'

import AccountCard from '@/components/cards/AccountCard'

function AccountListCard() {
    return (
        <Flex direction={'column'} gap={'1rem'} padding={'1rem'}>
            <AccountCard includeBio />
            <AccountCard includeBio followed />
            <AccountCard includeBio followed />
            <AccountCard includeBio />
            <AccountCard includeBio />
            <AccountCard includeBio followed />
        </Flex>
    )
}

export default AccountListCard
