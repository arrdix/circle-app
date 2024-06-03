import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { Container, Flex, Text, Image, Link as CircleLink } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'
import { registerDataType } from '@/types/types'
import { asyncUserRegister } from '@/states/auth/action'
import { useAppDispatch } from '@/app/hooks'

import RegisterInput from '@/components/inputs/RegisterInput'

function RegisterPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function onRegister(data: registerDataType): void {
        dispatch(asyncUserRegister(data))
        navigate('/login')
    }

    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'1rem'} justifyContent={'center'} height={'75%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-.75rem'}>
                    Create new account
                </Text>
                <RegisterInput onRegister={onRegister} />
                <Text>
                    Already have account?
                    <CircleLink as={ReactLink} to={'/login'} color={'circle.accent'} ml={'.25rem'}>
                        Login.
                    </CircleLink>
                </Text>
            </Flex>
        </Container>
    )
}

export default RegisterPage
