import { Card, Box, Flex, Divider } from '@chakra-ui/react'
import ProfileCardHeader from '@/components/cards/ProfileCardHeader'
import BrandHeading from '@/components/utilities/BrandHeading'
import SolidButton from '@/components/buttons/SolidButton'
import SolidInput from '@/components/inputs/SolidInput'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { useEditUser } from '@/hooks/useEditUser'
import { zodResolver } from '@hookform/resolvers/zod'
import { EditUserSchema } from '@/validators/validator'
import { EditUserDataType } from '@/types/types'

interface EditProfileModalProps {
    onClose: () => void
    avatar: string
}

function EditProfileModal({ avatar, onClose }: EditProfileModalProps) {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    const [onEdit] = useEditUser({ onClose })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditUserDataType>({
        resolver: zodResolver(EditUserSchema),
        defaultValues: {
            name: loggedUser?.name,
            username: loggedUser?.username,
            bio: loggedUser?.bio || '',
            avatar: null,
        },
    })

    return (
        <Box py={'2rem'}>
            <Card bg={'circle.backdrop'} px={'1rem'} color={'circle.font'} mb={'1.5rem'}>
                <BrandHeading text={'Edit Profile'} />
                <ProfileCardHeader avatar={avatar} name={'avatar'} register={register} editable />
            </Card>
            <Flex direction={'column'} gap={'.5rem'} px={'1rem'} mb="1rem">
                <SolidInput<EditUserDataType>
                    type={'text'}
                    placeholder={'Name'}
                    name={'name'}
                    register={register}
                    error={errors.name}
                />
                <SolidInput<EditUserDataType>
                    type={'text'}
                    placeholder={'Username'}
                    name={'username'}
                    register={register}
                    error={errors.username}
                />
                <SolidInput<EditUserDataType>
                    type={'text'}
                    placeholder={'Bio'}
                    name={'bio'}
                    register={register}
                    error={errors.bio}
                />
            </Flex>
            <Divider borderColor={'circle.darker'} />
            <Box width={'25%'} px={'1rem'} pt={'1rem'} ml={'auto'}>
                <SolidButton text={'Save'} onClick={handleSubmit((data) => onEdit(data))} />
            </Box>
        </Box>
    )
}

export default EditProfileModal