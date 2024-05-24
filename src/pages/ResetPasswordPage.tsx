import { Container, Flex, FormControl, Text, Image, Box } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import SolidButton from '@/components/buttons/SolidButton'
import HollowInput from '@/components/inputs/HollowInput'

function ResetPassword() {
    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'1rem'} justifyContent={'center'} height={'50%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-.75rem'}>
                    Reset Password
                </Text>
                <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
                    <HollowInput type={'text'} placeholder={'New password'} />
                    <HollowInput type={'text'} placeholder={'Confirm new password'} />
                    <Box mt={'.5rem'}>
                        <SolidButton text={'Create New Password'} />
                    </Box>
                </FormControl>
            </Flex>
        </Container>
    )
}

export default ResetPassword
