import { Flex, Spacer, Image } from '@chakra-ui/react'
import { BiSolidHome, BiSearchAlt, BiHeart, BiUser, BiLogOut } from 'react-icons/bi'

import NavigationItem from './NavigationItem'
import SolidButton from '../buttons/SolidButton'

function Navigation() {
    return (
        <Flex
            as={'nav'}
            direction={'column'}
            padding={'2rem'}
            gap={'1rem'}
            height={'100vh'}
            pos={'fixed'}
            w={'300px'}
        >
            <Image src={'/circle.png'} objectFit={'cover'} width={'85%'} mb={'1rem'} />
            <NavigationItem icon={<BiSolidHome />} text={'Home'} />
            <NavigationItem icon={<BiSearchAlt />} text={'Search'} />
            <NavigationItem icon={<BiHeart />} text={'Follow'} />
            <NavigationItem icon={<BiUser />} text={'Profile'} />
            <SolidButton text={'Create Vibe'} />
            <Spacer />
            <NavigationItem icon={<BiLogOut />} text={'Logout'} />
        </Flex>
    )
}

export default Navigation
