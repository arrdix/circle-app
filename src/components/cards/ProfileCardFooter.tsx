import { Text, CardFooter } from '@chakra-ui/react'

import GhostButton from '@/components/buttons/GhostButton'

function ProfileCardFooter() {
    return (
        <CardFooter display={'flex'} gap={'1rem'} padding={0}>
            <GhostButton>
                <Text color={'circle.font'}>489</Text>
                <Text color={'circle.dark'} ml={'.25rem'}>
                    Following
                </Text>
            </GhostButton>
            <GhostButton>
                <Text color={'circle.font'}>231</Text>
                <Text color={'circle.dark'} ml={'.25rem'}>
                    Followers
                </Text>
            </GhostButton>
        </CardFooter>
    )
}

export default ProfileCardFooter
