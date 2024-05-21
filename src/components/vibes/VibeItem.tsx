import { Card, CardHeader, CardBody, CardFooter, Text, Flex, Avatar } from '@chakra-ui/react'
import { BiSolidHeart, BiCommentDetail } from 'react-icons/bi'
import { VibeType, UserType } from '../../types/types'
import { fontSizing } from '../../styles/style'

import VibeItemButton from './VibeItemButton'

function VibeItem({ vibe, createdAt, likes, replies, isLiked, user }: VibeType) {
    const { name, username, profilePicture }: UserType = user
    console.log(createdAt)

    return (
        <Card bg={'circle.backdrop'} color={'circle.font'} p={'1rem'}>
            <Flex gap={'1rem'}>
                <Avatar src={profilePicture} />
                <Flex direction={'column'} gap={'.25rem'}>
                    <CardHeader display={'flex'} gap={'.5rem'} alignItems={'end'} padding={0}>
                        <Text fontSize={fontSizing.small} fontWeight={'700'}>
                            {name}
                        </Text>
                        <Text fontSize={fontSizing.small} color={'circle.dark'}>
                            {username}
                        </Text>
                        <Text fontSize={fontSizing.normal} color={'circle.dark'}>
                            • 4h
                        </Text>
                    </CardHeader>
                    <CardBody padding={0}>
                        <Text fontSize={fontSizing.small}>{vibe}</Text>
                    </CardBody>
                    <CardFooter display={'flex'} alignItems={'center'} gap={'1rem'} padding={0}>
                        <VibeItemButton
                            icon={<BiSolidHeart />}
                            value={likes}
                            color={isLiked ? 'circle.red' : 'circle.dark'}
                            hoverColor={isLiked ? 'circle.dark' : 'circle.red'}
                        />
                        <VibeItemButton
                            icon={<BiCommentDetail />}
                            value={replies}
                            color={'circle.dark'}
                            hoverColor={'circle.darker'}
                        />
                    </CardFooter>
                </Flex>
            </Flex>
        </Card>
    )
}

export default VibeItem
