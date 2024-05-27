import { Text, CardBody } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

function ProfileCardBody() {
    return (
        <CardBody padding={0} py={'.5rem'}>
            <Text fontSize={fontSizing.big} fontWeight={'700'}>
                Jesse Pinkman 💀
            </Text>
            <Text color={'circle.dark'} fontSize={fontSizing.small} mb={'.75rem'}>
                @jessepinkman
            </Text>
            <Text fontSize={fontSizing.small}>
                New Zealand, that's where they made Lord of the Rings. I say we move there yo!
            </Text>
        </CardBody>
    )
}

export default ProfileCardBody
