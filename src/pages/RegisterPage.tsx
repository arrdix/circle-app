import { Link as ReactLink } from 'react-router-dom'
import {
    Container,
    Flex,
    FormControl,
    Text,
    Image,
    Link as CircleLink,
    Box,
} from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import SolidButton from '@/components/buttons/SolidButton'
import HollowInput from '@/components/inputs/HollowInput'

function RegisterPage() {
    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'1rem'} justifyContent={'center'} height={'50%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-.75rem'}>
                    Create new account
                </Text>
                <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
                    <HollowInput type={'text'} placeholder={'Email'} />
                    <HollowInput type={'email'} placeholder={'Username'} />
                    <HollowInput type={'password'} placeholder={'Password'} />
                    <Box mt={'.5rem'}>
                        <SolidButton text={'Create'} />
                    </Box>
                </FormControl>
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
