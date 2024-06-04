import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { Container, Flex, Text, Image, Link as CircleLink } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import ForgotInput from '@/components/inputs/ForgotInput'
import { ForgotDataType } from '@/types/types'
import API from '@/networks/api'
import useCircleToast from '@/hooks/useCircleToast'

function ForgotPasswordPage() {
    const navigate = useNavigate()
    const createToast = useCircleToast()

    async function onForgot(data: ForgotDataType) {
        const watchedPromise = forgotHandler(data)
        createToast(watchedPromise, {
            title: 'Forgot Password',
            message: 'We got you! Please change your password.',
        })
    }

    async function forgotHandler(data: ForgotDataType) {
        const token = await API.FORGOT_PASSWORD(data)

        navigate('/help/reset', {
            state: token,
        })
    }

    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'1rem'} justifyContent={'center'} height={'50%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-.75rem'}>
                    Forgot Password
                </Text>
                <ForgotInput onForgot={onForgot} />
                <Text>
                    Suddenly remember it?
                    <CircleLink as={ReactLink} to={'/login'} color={'circle.accent'} ml={'.25rem'}>
                        Login.
                    </CircleLink>
                </Text>
            </Flex>
        </Container>
    )
}

export default ForgotPasswordPage
