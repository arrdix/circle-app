import { Box, Collapse, Input, Text } from '@chakra-ui/react'
import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface ValidatedInputProps<T extends FieldValues> {
    autoFocus?: boolean
    type: string
    placeholder: string
    name: Path<T>
    register: UseFormRegister<T>
    error: FieldError | undefined
}

function ValidatedInput<T extends FieldValues>(props: ValidatedInputProps<T>) {
    const { type, placeholder, name, error, register } = props
    const isCollapsed = error ? true : false

    return (
        <Box>
            <Input
                autoFocus={props.autoFocus && true}
                id={name}
                type={type}
                variant={'hollow'}
                placeholder={placeholder}
                {...register(name)}
            />

            <Collapse in={isCollapsed} transition={{ enter: { duration: 0.5 } }}>
                <Text mt={'.5rem'} color={'circle.error'}>
                    {error && error.message}
                </Text>
            </Collapse>
        </Box>
    )
}

export default ValidatedInput
