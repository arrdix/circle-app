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

function ForgotPasswordPage() {
    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'1rem'} justifyContent={'center'} height={'50%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-.75rem'}>
                    Forgot Password
                </Text>
                <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
                    <HollowInput type={'email'} placeholder={'Email'} />
                    <Box mt={'.5rem'}>
                        <SolidButton text={'Send Instruction'} />
                    </Box>
                </FormControl>
                <Text>
                    Already have an account?
                    <CircleLink as={ReactLink} to={'/login'} color={'circle.accent'} ml={'.25rem'}>
                        Login.
                    </CircleLink>
                </Text>
            </Flex>
        </Container>
    )
}

export default ForgotPasswordPage
