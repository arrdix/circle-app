import { Link as ReactLink } from 'react-router-dom'
import { Container, Flex, FormControl, Text, Image, Link as CircleLink } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import SolidButton from '@/components/buttons/SolidButton'
import HollowInput from '@/components/inputs/HollowInput'

function LoginPage() {
    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'1rem'} justifyContent={'center'} height={'50%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-.75rem'}>
                    Login to circle
                </Text>
                <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
                    <HollowInput type={'text'} placeholder={'Email/Username'} />
                    <HollowInput type={'password'} placeholder={'Password'} />
                    <CircleLink as={ReactLink} to={'/help/forgot'} ml={'auto'}>
                        Forgot password?
                    </CircleLink>
                    <SolidButton text={'Login'} />
                </FormControl>
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
