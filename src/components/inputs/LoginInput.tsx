import { Box, FormControl, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { LoginDataType } from '@/types/types'

import SolidButton from '@/components/buttons/SolidButton'

interface LoginInputProps {
    onLogin: (data: LoginDataType) => void
}

function LoginInput(props: LoginInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginDataType>({
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const loginValidation = {
        required: 'Must not be empty',
        minLength: {
            value: 4,
            message: 'Must be at least 4 chars.',
        },
    }

    return (
        <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
            <Input
                type={'text'}
                placeholder="Username"
                variant={'hollow'}
                {...register('username', loginValidation)}
            />
            <p>{errors.username?.message}</p>
            <Input
                type={'password'}
                placeholder="Password"
                variant={'hollow'}
                {...register('password', loginValidation)}
            />
            <p>{errors.password?.message}</p>

            <Box mt={'.5rem'}>
                <SolidButton
                    text={'Create'}
                    onClick={handleSubmit((data) => {
                        props.onLogin(data)
                    })}
                />
            </Box>
        </FormControl>
    )
}

export default LoginInput
