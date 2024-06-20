import { Card, Flex, Avatar, Box, Divider, useDisclosure } from '@chakra-ui/react'
import { VibeType } from '@/types/types'
import { vibeHover } from '@/styles/style'

import VibeItemHeader from '@/components/vibes/VibeItemHeader'
import VibeItemBody from '@/components/vibes/VibeItemBody'
import VibeItemFooter from '@/components/vibes/VibeItemFooter'
import ImageModal from '@/components/modals/ImageModal'

interface VibeItemProps {
    vibe: VibeType
    noImage?: boolean
    repliesTarget?: boolean
    isReply?: boolean
}

function VibeItem({ vibe, noImage, repliesTarget, isReply }: VibeItemProps) {
    const { id, content, image, createdAt, totalLikes, totalReplies, isLiked, author } = vibe
    const { isOpen, onOpen, onClose } = useDisclosure()

    if (author) {
        return (
            <Box>
                <Card
                    bg={'circle.backdrop'}
                    color={'circle.font'}
                    p={'1rem'}
                    _hover={!isReply ? vibeHover : {}}
                >
                    <Flex gap={'1rem'}>
                        <Avatar src={author.avatar} />
                        <Flex direction={'column'} gap={'.25rem'} width={'100%'}>
                            <VibeItemHeader
                                name={author.name}
                                username={`@${author.username}`}
                                date={createdAt}
                            />
                            <VibeItemBody
                                vibeId={id}
                                vibeContent={content}
                                vibeImage={image}
                                noImage={noImage && noImage}
                                onOpen={onOpen}
                            />
                            <VibeItemFooter
                                vibeId={id}
                                totalLike={totalLikes}
                                totalReply={totalReplies}
                                isLiked={isLiked}
                                author={author}
                                isReply={isReply && isReply}
                                repliesTarget={repliesTarget && repliesTarget}
                            />
                        </Flex>
                    </Flex>
                </Card>
                <Divider border={'1px'} borderColor={'circle.darker'} />
                {isOpen && <ImageModal isOpen={isOpen} onClose={onClose} vibeImage={image} />}
            </Box>
        )
    }
}

export default VibeItem
