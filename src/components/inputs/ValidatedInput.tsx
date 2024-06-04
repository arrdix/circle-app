import { Box, Collapse, Input, Text } from '@chakra-ui/react'
import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface FormFieldProps<T extends FieldValues> {
    type: string
    placeholder: string
    name: Path<T>
    register: UseFormRegister<T>
    error: FieldError | undefined
}

function ValidatedInput<T extends FieldValues>(props: FormFieldProps<T>) {
    const { type, placeholder, name, error, register } = props
    const isOpen = error ? true : false

    return (
        <Box>
            <Input
                id={name}
                type={type}
                variant={'hollow'}
                placeholder={placeholder}
                {...register(name)}
            />

            <Collapse in={isOpen} transition={{ enter: { duration: 0.5 } }}>
                <Text mt={'.5rem'} color={'circle.error'}>
                    {error && error.message}
                </Text>
            </Collapse>
        </Box>
    )
}

export default ValidatedInput
