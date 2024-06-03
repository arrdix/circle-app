import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { Container, Flex, Text, Image, Link as CircleLink } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'
import { LoginDataType } from '@/types/types'
import { useAppDispatch } from '@/app/hooks'
import { setLoggedUser } from '@/features/auth/authSlice'

import LoginInput from '@/components/inputs/LoginInput'
import API from '@/networks/api'

function LoginPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    async function onLogin(data: LoginDataType): Promise<void> {
        try {
            const token = await API.LOGIN(data)
            const loggedUser = await API.GET_LOGGED_USER(token.token)

            dispatch(setLoggedUser(loggedUser))
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'1rem'} justifyContent={'center'} height={'50%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-.75rem'}>
                    Login to circle
                </Text>
                <LoginInput onLogin={onLogin} />
                <Text>
                    Don't have an account?
                    <CircleLink
                        as={ReactLink}
                        to={'/register'}
                        color={'circle.accent'}
                        ml={'.25rem'}
                    >
                        Create Account.
                    </CircleLink>
                </Text>
            </Flex>
        </Container>
    )
}

export default LoginPage
