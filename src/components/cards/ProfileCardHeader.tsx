import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import { Image, Flex, CardHeader, Box, useDisclosure, Input } from '@chakra-ui/react'
import { BiImages } from 'react-icons/bi'
import { fontSizing } from '@/styles/style'
import { useState } from 'react'

import HollowButton from '@/components/buttons/HollowButton'
import BrandModal from '@/components/modals/BrandModal'
import EditProfileModal from '@/components/modals/EditProfileModal'

interface ProfileCardHeaderProps<T extends FieldValues> {
    buttonText?: string
    editable?: boolean
    avatar: string
    name?: Path<T>
    register?: UseFormRegister<T>
}

function ProfileCardHeader<T extends FieldValues>(props: ProfileCardHeaderProps<T>) {
    const { buttonText, editable, avatar, register, name } = props
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [avatarPreview, setAvatarPreview] = useState<string>('')

    function onAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files

        if (files) {
            setAvatarPreview(URL.createObjectURL(files[0]))
        }
    }

    return (
        <CardHeader
            display={'flex'}
            flexDirection={'column'}
            padding={0}
            mt={'1rem'}
            gap={'.5rem'}
            pos={'relative'}
        >
            <Image
                src={avatar}
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
                    src={avatarPreview ? avatarPreview : avatar}
                    objectFit={'cover'}
                    boxSize={'150px'}
                    borderRadius={'full'}
                    border={'4px'}
                    borderColor={'circle.darker'}
                />
            </Flex>
            {editable && name && register && (
                <Flex
                    boxSize={'150px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    pos={'absolute'}
                    left={'5%'}
                    bottom={'0'}
                >
                    <Input
                        pos={'absolute'}
                        type={'file'}
                        height={0}
                        width={0}
                        border={0}
                        id="atAvatar"
                        variant={'hollow'}
                        {...register(name)}
                        onChange={(e) => onAvatarChange(e)}
                    />
                    <Box
                        bg={'circle.backdrop'}
                        opacity={'.8'}
                        padding={'1rem'}
                        borderRadius={'full'}
                    >
                        <label htmlFor="atAvatar">
                            <BiImages fontSize={fontSizing.bigger} />
                        </label>
                    </Box>
                </Flex>
            )}
            <BrandModal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <EditProfileModal avatar={avatar} onClose={onClose} />
            </BrandModal>
        </CardHeader>
    )
}

export default ProfileCardHeader
