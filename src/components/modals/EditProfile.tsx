import { Card, Box, Flex, Divider } from '@chakra-ui/react'
import ProfileCardHeader from '@/components/cards/ProfileCardHeader'
import BrandHeading from '@/components/utilities/BrandHeading'
import SolidButton from '@/components/buttons/SolidButton'
import SolidInput from '@/components/inputs/SolidInput'

function EditProfile() {
    return (
        <Box py={'2rem'}>
            <Card bg={'circle.backdrop'} px={'1rem'} color={'circle.font'} mb={'1.5rem'}>
                <BrandHeading text={'Edit Profile'} />
                <ProfileCardHeader editable />
            </Card>
            <Flex direction={'column'} gap={'.5rem'} px={'1rem'} mb="1rem">
                <SolidInput type={'text'} placeholder={'Name'} value={'Jesse Pinkman 💀'} />
                <SolidInput type={'text'} placeholder={'Username'} value={'@jessepinkman'} />
                <SolidInput
                    type={'text'}
                    placeholder={'Bio'}
                    value={
                        "New Zealand, that's where they made Lord of the Rings. I say we move there yo!"
                    }
                />
            </Flex>
            <Divider borderColor={'circle.darker'} />
            <Box width={'25%'} px={'1rem'} pt={'1rem'} ml={'auto'}>
                <SolidButton text={'Save'} />
            </Box>
        </Box>
    )
}

export default EditProfile
