import { Image, Flex, CardHeader, Box, useDisclosure } from '@chakra-ui/react'
import { BiImages } from 'react-icons/bi'
import { fontSizing } from '@/styles/style'

import GhostButton from '@/components/buttons/GhostButton'
import HollowButton from '@/components/buttons/HollowButton'
import BrandModal from '@/components/modals/BrandModal'
import EditProfile from '@/components/modals/EditProfile'

interface ProfileCardHeaderProps {
    buttonText?: string
    editable?: boolean
}

function ProfileCardHeader({ buttonText, editable }: ProfileCardHeaderProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const imagePlaceholder = 'https://api.dicebear.com/8.x/thumbs/svg?seed=Sheba'

    return (
        <CardHeader
            display={'flex'}
            flexDirection={'column'}
            padding={0}
            gap={'.5rem'}
            pos={'relative'}
        >
            <Image
                src={imagePlaceholder}
                objectFit={'cover'}
                height={editable ? '200px' : '150px'}
                width={'100%'}
                borderRadius={'xl'}
                mb={editable ? '3rem' : 0}
            />
            {!editable && (
                <Box ml={'auto'} zIndex={1}>
                    <HollowButton onClick={onOpen} text={buttonText} />
                </Box>
            )}
            <Flex pos={'absolute'} left={'5%'} bottom={'0'}>
                <Image
                    src={imagePlaceholder}
                    boxSize={editable ? '150px' : '45%'}
                    borderRadius={'full'}
                    border={'4px'}
                    borderColor={'circle.darker'}
                />
            </Flex>
            {editable && (
                <Flex
                    boxSize={'150px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    pos={'absolute'}
                    left={'5%'}
                    bottom={'0'}
                >
                    <Box
                        bg={'circle.backdrop'}
                        opacity={'.8'}
                        padding={'1rem'}
                        borderRadius={'full'}
                    >
                        <GhostButton color={'circle.font'} fontSize={fontSizing.biggest}>
                            <BiImages />
                        </GhostButton>
                    </Box>
                </Flex>
            )}
            <BrandModal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <EditProfile />
            </BrandModal>
        </CardHeader>
    )
}

export default ProfileCardHeader
