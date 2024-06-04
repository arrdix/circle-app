import { Box, FormControl, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { RegisterDataType } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'

import SolidButton from '@/components/buttons/SolidButton'
import { RegisterSchema } from '@/validators/validator'

interface RegisterInputProps {
    onRegister: (data: RegisterDataType) => void
}

function RegisterInput(props: RegisterInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterDataType>({
        resolver: zodResolver(RegisterSchema),
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
            <Input type={'text'} placeholder="Name" variant={'hollow'} {...register('name')} />
            <p>{errors.name?.message}</p>
            <Input type={'email'} placeholder="Email" variant={'hollow'} {...register('email')} />
            <p>{errors.email?.message}</p>
            <Input
                type={'password'}
                placeholder="Passoword"
                variant={'hollow'}
                {...register('password')}
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
