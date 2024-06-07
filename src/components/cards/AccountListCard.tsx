import { Flex, Text } from '@chakra-ui/react'
import { UserType } from '@/types/types'
import { fontSizing } from '@/styles/style'

import AccountCard from '@/components/cards/AccountCard'

interface AccountListCardProps {
    accounts: UserType[]
}

function AccountListCard({ accounts }: AccountListCardProps) {
    if (accounts.length) {
        return (
            <Flex direction={'column'} gap={'1rem'} padding={'1rem'}>
                {accounts.map((account) => (
                    <AccountCard
                        key={account.id}
                        username={account.username}
                        name={account.name}
                        bio={account.bio}
                    />
                ))}
            </Flex>
        )
    }

    return (
        <Flex direction={'column'} alignItems={'center'} mt={'3rem'} width={'100%'}>
            <Text fontSize={fontSizing.big} fontWeight={'600'} color={'circle.dark'}>
                Nothing to see here.
            </Text>
        </Flex>
    )
}

export default AccountListCard
