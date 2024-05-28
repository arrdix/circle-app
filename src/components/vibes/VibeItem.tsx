import { Card, Flex, Avatar, Box, Divider, useDisclosure } from '@chakra-ui/react'
import { VibeType, UserType, ContentType } from '@/types/types'
import { vibeHover } from '@/styles/style'

import VibeItemHeader from '@/components/vibes/VibeItemHeader'
import VibeItemBody from '@/components/vibes/VibeItemBody'
import VibeItemFooter from '@/components/vibes/VibeItemFooter'
import ImageModal from '@/components/modals/ImageModal'

interface VibeItemProps extends VibeType {
    withoutPhoto?: boolean
}

function VibeItem({
    id,
    content,
    createdAt,
    likes,
    replies,
    isLiked,
    user,
    withoutPhoto,
}: VibeItemProps) {
    const { name, username, profilePicture }: UserType = user
    const { vibe, vibePhoto }: ContentType = content

    const { isOpen, onOpen, onClose } = useDisclosure()

    // console.log(createdAt)
    return (
        <Box>
            <Card bg={'circle.backdrop'} color={'circle.font'} p={'1rem'} _hover={vibeHover}>
                <Flex gap={'1rem'}>
                    <Avatar src={profilePicture} />
                    <Flex direction={'column'} gap={'.25rem'}>
                        <VibeItemHeader name={name} username={username} />
                        <VibeItemBody
                            vibe={vibe}
                            vibeId={id}
                            vibePhoto={withoutPhoto ? undefined : vibePhoto}
                            onOpen={onOpen}
                        />
                        <VibeItemFooter likes={likes} replies={replies} isLiked={isLiked} />
                    </Flex>
                </Flex>
            </Card>
            <Divider border={'1px'} borderColor={'circle.darker'} />
            <ImageModal isOpen={isOpen} onClose={onClose} vibePhoto={vibePhoto} />
        </Box>
    )
}

export default VibeItem
