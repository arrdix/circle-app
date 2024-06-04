import { Box, FormControl, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { ForgotDataType } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'

import SolidButton from '@/components/buttons/SolidButton'
import { ForgotSchema } from '@/validators/validator'

interface ForgotInputProps {
    onForgot: (data: ForgotDataType) => void
}

function ForgotInput(props: ForgotInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotDataType>({
        resolver: zodResolver(ForgotSchema),
    })

    return (
        <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
            <Input
                autoFocus
                id={'email'}
                type={'text'}
                placeholder="Email"
                variant={'hollow'}
                {...register('email')}
            />
            <p>{errors.email?.message}</p>

            <Box mt={'.5rem'}>
                <SolidButton
                    text={'Send Instruction'}
                    onClick={handleSubmit((data) => {
                        props.onForgot(data)
                    })}
                />
            </Box>
        </FormControl>
    )
}

export default ForgotInput
