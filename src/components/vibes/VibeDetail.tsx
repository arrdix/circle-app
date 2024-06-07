import { DetailedVibeType, UserType, VibeDataType } from '@/types/types'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { fontSizing } from '@/styles/style'

import API from '@/networks/api'
import VibeList from '@/components/vibes/VibeList'
import VibeItem from '@/components/vibes/VibeItem'
import NewVibe from '@/components/vibes/NewVibe'

interface VibeDetailProps {
    onReply: (data: VibeDataType) => void
    vibe: DetailedVibeType
}

function VibeDetail({ vibe, onReply }: VibeDetailProps) {
    const { replies, ...rest } = vibe

    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        async function getUsers() {
            const users: UserType[] = await API.GET_ALL_USERS()
            setUsers(users)
        }

        getUsers()
    }, [])

    const repliesWithAuthor = replies.map((reply) => {
        return {
            ...reply,
            author: users.find((user) => user.id === reply.authorId),
        }
    })

    if (!replies.length)
        return (
            <Box>
                <VibeItem vibe={rest} />
                <NewVibe
                    placeholder={'Post your reply'}
                    onPost={onReply}
                    imagePreviewId={'atDetail'}
                    buttonText={'Reply'}
                />
                <Flex direction={'column'} alignItems={'center'} mt={'3rem'} width={'100%'}>
                    <Text fontSize={fontSizing.big} fontWeight={'600'} color={'circle.dark'}>
                        No replies to this vibe so far.
                    </Text>
                    <Text fontSize={fontSizing.normal} color={'circle.dark'}>
                        Share your thoughts first!
                    </Text>
                </Flex>
            </Box>
        )

    return (
        <Box>
            <VibeItem vibe={rest} />
            <NewVibe
                placeholder={'Post your reply'}
                onPost={onReply}
                imagePreviewId={'atDetail'}
                buttonText={'Reply'}
            />
            <VibeList vibes={repliesWithAuthor} />
        </Box>
    )
}

export default VibeDetail
