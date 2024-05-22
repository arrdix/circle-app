import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Flex,
    Avatar,
    Box,
    Divider,
    Image,
} from '@chakra-ui/react'
import { BiSolidHeart, BiCommentDetail } from 'react-icons/bi'
import { VibeType, UserType, ContentType } from '../../types/types'
import { fontSizing, vibeHover } from '../../styles/style'

import VibeItemButton from './VibeItemButton'

function VibeItem({ content, createdAt, likes, replies, isLiked, user }: VibeType) {
    const { name, username, profilePicture }: UserType = user
    const { vibe, vibePhoto }: ContentType = content
    console.log(createdAt)
    console.log(typeof vibePhoto)
    return (
        <Box>
            <Card bg={'circle.backdrop'} color={'circle.font'} p={'1rem'} _hover={vibeHover}>
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
                            <Text fontSize={fontSizing.small} color={'circle.dark'}>
                                • 4h
                            </Text>
                        </CardHeader>
                        <CardBody padding={0}>
                            <Text fontSize={fontSizing.small} mb={'.75rem'}>
                                {vibe}
                            </Text>
                            {vibePhoto && (
                                <Image
                                    src={vibePhoto}
                                    objectFit={'cover'}
                                    maxWidth={'100%'}
                                    height={'auto'}
                                    borderRadius={'lg'}
                                />
                            )}
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
            <Divider border={'1px'} borderColor={'circle.darker'} />
        </Box>
    )
}

export default VibeItem
