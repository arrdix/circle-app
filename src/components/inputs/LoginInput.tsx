import { Box, FormControl, Input, Link as CircleLink } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
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
                autoFocus
                id={'username'}
                type={'text'}
                placeholder="Username"
                variant={'hollow'}
                {...register('username')}
            />
            <p>{errors.username?.message}</p>
            <Input
                id={'password'}
                type={'password'}
                placeholder="Password"
                variant={'hollow'}
                {...register('password')}
            />
            <p>{errors.password?.message}</p>

            <CircleLink as={ReactLink} to={'/help/forgot'} ml={'auto'}>
                Forgot password?
            </CircleLink>

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
