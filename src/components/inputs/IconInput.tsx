import { Box, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { BiSearchAlt } from 'react-icons/bi'

function IconInput() {
    return (
        <Box px={'1rem'} pt={'2rem'}>
            <Stack spacing={4}>
                <InputGroup color={'circle-dark'}>
                    <InputLeftElement pointerEvents={'none'} color={'circle.dark'}>
                        <Box ml={'1rem'}>
                            <BiSearchAlt />
                        </Box>
                    </InputLeftElement>
                    <Input
                        type="text"
                        pl={'2.75rem'}
                        placeholder="Search.."
                        border={'2px'}
                        borderColor={'transparent'}
                        borderRadius={'2xl'}
                        bg={'circle.darker'}
                        color={'circle.font'}
                        _active={{
                            boxShadow: 'none',
                            borderColor: 'circle.accent',
                        }}
                        _focus={{
                            boxShadow: 'none',
                            borderColor: 'circle.accent',
                        }}
                        _hover={{
                            boxShadow: 'none',
                            borderColor: 'circle.accent',
                        }}
                        _placeholder={{ color: 'circle.dark' }}
                    />
                </InputGroup>
            </Stack>
        </Box>
    )
}

export default IconInput
