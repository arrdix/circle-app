import { Image, Flex, CardHeader, Box } from '@chakra-ui/react'

import HollowButton from '@/components/buttons/HollowButton'

interface ProfileCardHeaderProps {
    buttonText: string
}

function ProfileCardHeader({ buttonText }: ProfileCardHeaderProps) {
    return (
        <CardHeader
            display={'flex'}
            flexDirection={'column'}
            padding={0}
            gap={'.5rem'}
            pos={'relative'}
        >
            <Image
                src="https://api.dicebear.com/8.x/thumbs/svg?seed=Sheba"
                objectFit={'cover'}
                height={'150px'}
                width={'100%'}
                borderRadius={'xl'}
            />
            <Box ml={'auto'}>
                <HollowButton text={buttonText} />
            </Box>
            <Flex pos={'absolute'} left={'5%'} bottom={'0'}>
                <Image
                    src={'https://api.dicebear.com/8.x/thumbs/svg?seed=Sheba'}
                    borderRadius={'full'}
                    boxSize={'100px'}
                    border={'4px'}
                    borderColor={'circle.darker'}
                />
            </Flex>
        </CardHeader>
    )
}

export default ProfileCardHeader
