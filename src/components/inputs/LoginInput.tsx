import { Box, FormControl, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { LoginDataType } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'

import SolidButton from '@/components/buttons/SolidButton'
import { LoginSchema } from '@/validators/validator'

interface LoginInputProps {
    onLogin: (data: LoginDataType) => void
}

function LoginInput(props: LoginInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginDataType>({
        resolver: zodResolver(LoginSchema),
    })

    return (
        <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
            <Input
                type={'text'}
                placeholder="Username"
                variant={'hollow'}
                {...register('username')}
            />
            <p>{errors.username?.message}</p>
            <Input
                type={'password'}
                placeholder="Password"
                variant={'hollow'}
                {...register('password')}
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
