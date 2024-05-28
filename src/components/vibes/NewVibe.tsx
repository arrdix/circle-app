import { Avatar, Flex, Spacer, FormControl, Box, Divider, Textarea } from '@chakra-ui/react'
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
            <Flex direction={'column'} justifyContent={'center'} gap={'1rem'}>
                <Flex alignItems={'start'} gap={'1rem'} ml={'1rem'} mt={'1rem'}>
                    <Avatar src={'https://api.dicebear.com/8.x/thumbs/svg?seed=Sheba'} />
                    <FormControl color={'circle.font'}>
                        <Textarea
                            px={0}
                            border={0}
                            minHeight={'120px'}
                            resize={'none'}
                            placeholder={placeholder}
                            fontSize={fontSizing.big}
                            _active={{ background: 'none', boxShadow: 'none' }}
                            _focus={{ background: 'none', boxShadow: 'none' }}
                            _placeholder={{ color: 'circle.dark' }}
                        />
                    </FormControl>
                </Flex>
                <Divider borderColor={'circle.darker'} />
                <Flex
                    alignItems={'center'}
                    gap={'1rem'}
                    color={'circle.accent'}
                    mb={'1rem'}
                    mr={'1rem'}
                >
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
