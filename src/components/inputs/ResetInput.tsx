import { Box, FormControl, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { ResetDataType } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'

import SolidButton from '@/components/buttons/SolidButton'
import { ResetSchema } from '@/validators/validator'

interface ResetInputProps {
    onReset: (data: ResetDataType) => void
}

function ResetInput(props: ResetInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetDataType>({
        resolver: zodResolver(ResetSchema),
    })

    return (
        <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
            <Input
                autoFocus
                id={'new-password'}
                type={'text'}
                placeholder="New Password"
                variant={'hollow'}
                {...register('newPassword')}
            />
            <p>{errors.newPassword?.message}</p>

            <Input
                id={'confirmed-password'}
                type={'text'}
                placeholder="Confirm Password"
                variant={'hollow'}
                {...register('confirmedPassword')}
            />
            <p>{errors.confirmedPassword?.message}</p>
            <p>{errors.general?.message}</p>

            <Box mt={'.5rem'}>
                <SolidButton
                    text={'Send Instruction'}
                    onClick={handleSubmit((data) => {
                        props.onReset(data)
                    })}
                />
            </Box>
        </FormControl>
    )
}

export default ResetInput
