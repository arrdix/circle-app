import { Card, Flex, Avatar, Box, Divider, useDisclosure } from '@chakra-ui/react'
import { VibeType } from '@/types/types'
import { vibeHover } from '@/styles/style'

import VibeItemHeader from '@/components/vibes/VibeItemHeader'
import VibeItemBody from '@/components/vibes/VibeItemBody'
import VibeItemFooter from '@/components/vibes/VibeItemFooter'
import ImageModal from '@/components/modals/ImageModal'

interface VibeItemProps {
    vibe: VibeType
}

function VibeItem({ vibe }: VibeItemProps) {
    const { id, content, image, createdAt, totalLikes, totalReplies, isLiked, author } = vibe

    const { isOpen, onOpen, onClose } = useDisclosure()

    if (author) {
        return (
            <Box>
                <Card bg={'circle.backdrop'} color={'circle.font'} p={'1rem'} _hover={vibeHover}>
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
                                onOpen={onOpen}
                            />
                            <VibeItemFooter
                                likes={totalLikes}
                                replies={totalReplies}
                                isLiked={isLiked}
                                author={author}
                            />
                        </Flex>
                    </Flex>
                </Card>
                <Divider border={'1px'} borderColor={'circle.darker'} />
                <ImageModal isOpen={isOpen} onClose={onClose} vibePhoto={image} />
            </Box>
        )
    }
}

export default VibeItem
