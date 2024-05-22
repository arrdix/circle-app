import { Avatar, Flex, Spacer, FormControl, Input, Box, Divider } from '@chakra-ui/react'
import { BiImageAdd } from 'react-icons/bi'
import { fontSizing } from '@/styles/style'

import SolidButton from '@/components/buttons/SolidButton'
import GhostButton from '@/components/buttons/GhostButton'

interface NewVibeProps {
    placeholder: string
    buttonText?: string
}

function NewVibe({ placeholder, buttonText }: NewVibeProps) {
    return (
        <Box>
            <Flex direction={'column'} justifyContent={'center'} margin={'1rem'} gap={'1rem'}>
                <Flex alignItems={'center'} gap={'1rem'}>
                    <Avatar src={'https://api.dicebear.com/8.x/thumbs/svg?seed=Sheba'} />
                    <FormControl color={'circle.font'}>
                        <Input
                            px={0}
                            border={0}
                            placeholder={placeholder}
                            fontSize={fontSizing.big}
                            _active={{ background: 'none', boxShadow: 'none' }}
                            _focus={{ background: 'none', boxShadow: 'none' }}
                            _placeholder={{ color: 'circle.dark' }}
                        />
                    </FormControl>
                </Flex>
                <Flex alignItems={'center'} gap={'1rem'} color={'circle.accent'}>
                    <Spacer />
                    <GhostButton color={'circle.accent'}>
                        <BiImageAdd fontSize={'2rem'} />
                    </GhostButton>
                    <Box width={'15%'}>
                        <SolidButton text={buttonText ? buttonText : 'Post'} />
                    </Box>
                </Flex>
            </Flex>
            <Divider border={'1px'} borderColor={'circle.darker'} />
        </Box>
    )
}

export default NewVibe
