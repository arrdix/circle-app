import { Flex, Text, Avatar } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import HollowButton from '@/components/buttons/HollowButton'

interface AccountCardProps {
    username: string
    name: string
    bio: string | null
    avatar: string
    noBio?: boolean
}

function AccountCard({ username, name, bio, avatar, noBio }: AccountCardProps) {
    return (
        <Flex gap={'1rem'} alignItems={'center'}>
            <Avatar src={avatar} />
            <Flex direction={'column'} justifyContent={'center'} gap={0} mr={'auto'}>
                <Text fontSize={fontSizing.small} fontWeight={'700'}>
                    {name}
                </Text>
                <Text fontSize={fontSizing.smaller} color={'circle.dark'}>
                    @{username}
                </Text>
                {bio && !noBio && <Text fontSize={fontSizing.smaller}>{bio}</Text>}
            </Flex>
            <HollowButton text={'Follow'} />
        </Flex>
    )
}

export default AccountCard
