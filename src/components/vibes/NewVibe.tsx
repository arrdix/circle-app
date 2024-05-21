import { Avatar, Flex, Spacer, FormControl, Input, Box } from '@chakra-ui/react'
import { BiImageAdd } from 'react-icons/bi'
import { fontSizing } from '../../styles/style'

import SolidButton from '../buttons/SolidButton'
import GhostButton from '../buttons/GhostButton'

function NewVibe() {
    return (
        <Flex direction={'column'} justifyContent={'center'} margin={'1rem'} gap={'1rem'}>
            <Flex alignItems={'center'} gap={'1rem'}>
                <Avatar src={'https://api.dicebear.com/8.x/thumbs/svg?seed=Sheba'} />
                <FormControl color={'circle.font'}>
                    <Input
                        px={0}
                        border={0}
                        placeholder={"What's on your mind?"}
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
                    <SolidButton text={'Post'} />
                </Box>
            </Flex>
        </Flex>
    )
}

export default NewVibe
