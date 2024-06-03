import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { Container, Flex, Text, Image, Link as CircleLink } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'
import { RegisterDataType } from '@/types/types'

import RegisterInput from '@/components/inputs/RegisterInput'
import API from '@/networks/api'

function RegisterPage() {
    const navigate = useNavigate()

    async function onRegister(data: RegisterDataType): Promise<void> {
        try {
            await API.REGISTER(data)
            navigate('/login')
        } catch (error) {
            alert(error)
        }
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
