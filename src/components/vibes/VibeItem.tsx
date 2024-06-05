import { Card, Flex, Avatar, Box, Divider, useDisclosure } from '@chakra-ui/react'
import { UserType, VibeType } from '@/types/types'
import { vibeHover } from '@/styles/style'

import VibeItemHeader from '@/components/vibes/VibeItemHeader'
import VibeItemBody from '@/components/vibes/VibeItemBody'
import VibeItemFooter from '@/components/vibes/VibeItemFooter'
import ImageModal from '@/components/modals/ImageModal'

interface VibeItemProps {
    vibe: VibeType
    author: UserType
}

function VibeItem({ vibe, author }: VibeItemProps) {
    const { id, content, image, createdAt, totalLikes, totalReplies, isLiked } = vibe
    const { username, name, avatar } = author

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Card bg={'circle.backdrop'} color={'circle.font'} p={'1rem'} _hover={vibeHover}>
                <Flex gap={'1rem'}>
                    <Avatar src={avatar} />
                    <Flex direction={'column'} gap={'.25rem'}>
                        <VibeItemHeader name={name} username={`@${username}`} date={createdAt} />
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
                        />
                    </Flex>
                </Flex>
            </Card>
            <Divider border={'1px'} borderColor={'circle.darker'} />
            <ImageModal isOpen={isOpen} onClose={onClose} vibePhoto={image} />
        </Box>
    )
}

export default VibeItem
