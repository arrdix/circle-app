import { Box, FormControl, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { registerDataType } from '@/types/types'

import SolidButton from '@/components/buttons/SolidButton'

interface RegisterInputProps {
    onRegister: (data: registerDataType) => void
}

function RegisterInput(props: RegisterInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    })

    const registerValidation = {
        required: 'Must not be empty',
        minLength: {
            value: 4,
            message: 'At least 4 chars.',
        },
    }

    return (
        <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
            <Input
                type={'text'}
                placeholder="Username"
                variant={'hollow'}
                {...register('username', registerValidation)}
            />
            <p>{errors.username?.message}</p>
            <Input
                type={'email'}
                placeholder="Email"
                variant={'hollow'}
                {...register('email', registerValidation)}
            />
            <p>{errors.email?.message}</p>
            <Input
                type={'password'}
                placeholder="Passoword"
                variant={'hollow'}
                {...register('password', registerValidation)}
            />
            <p>{errors.password?.message}</p>

            <Box mt={'.5rem'}>
                <SolidButton
                    text={'Create'}
                    onClick={handleSubmit((data) => {
                        props.onRegister(data)
                    })}
                />
            </Box>
        </FormControl>
    )
}

export default RegisterInput
