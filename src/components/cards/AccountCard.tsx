import { Flex, Text, Avatar } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import HollowButton from '@/components/buttons/HollowButton'

interface AccountCardProps {
    includeBio?: boolean
    followed?: boolean
}

function AccountCard({ includeBio, followed }: AccountCardProps) {
    return (
        <Flex gap={'1rem'} alignItems={'center'}>
            <Avatar src={'https://api.dicebear.com/8.x/thumbs/svg?seed=Maggie'} />
            <Flex direction={'column'} justifyContent={'center'} gap={0} mr={'auto'}>
                <Text fontSize={fontSizing.small} fontWeight={'700'}>
                    Arya Stark
                </Text>
                <Text fontSize={fontSizing.smaller} color={'circle.dark'}>
                    @aryawinterfell
                </Text>
                {includeBio && (
                    <Text fontSize={fontSizing.smaller}>Valar Morghulis - Valar Dohaeris</Text>
                )}
            </Flex>
            {followed ? <HollowButton text={'Following'} dark /> : <HollowButton text={'Follow'} />}
        </Flex>
    )
}

export default AccountCard
