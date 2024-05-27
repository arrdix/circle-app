import { Text, CardBody } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

interface ProfileCardBodyProps {
    py?: string
}

function ProfileCardBody({ py = '.5rem' }: ProfileCardBodyProps) {
    return (
        <CardBody padding={0} py={py}>
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
