import { Flex, Text, Avatar, Spacer } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import HollowButton from '@/components/buttons/HollowButton'

interface AccountCardProps {
    includeBio?: boolean
}

function AccountCard({ includeBio }: AccountCardProps) {
    return (
        <Flex gap={'1rem'} alignItems={'center'}>
            <Avatar src={'https://api.dicebear.com/8.x/thumbs/svg?seed=Lola'} />
            <Flex direction={'column'} gap={0}>
                <Text fontSize={fontSizing.small} fontWeight={'700'}>
                    Yudistira Ardi
                </Text>
                <Text fontSize={fontSizing.smaller} color={'circle.dark'}>
                    @arrdix
                </Text>
                {includeBio && (
                    <Text fontSize={fontSizing.smaller}>Valar Morghulis - Valar Dohaeris</Text>
                )}
            </Flex>
            <Spacer />
            <HollowButton text={'Follow'} />
        </Flex>
    )
}

export default AccountCard
