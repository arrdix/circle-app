import { Link } from 'react-router-dom'
import { Flex, Spacer, Image } from '@chakra-ui/react'
import { BiSolidHome, BiSearchAlt, BiHeart, BiUser, BiLogOut } from 'react-icons/bi'

import NavigationItem from './NavigationItem'
import SolidButton from '../buttons/SolidButton'

function Navigation() {
    return (
        <Flex
            as={'nav'}
            direction={'column'}
            py={'2rem'}
            pr={'2rem'}
            gap={'2rem'}
            height={'100vh'}
            pos={'fixed'}
            w={'266px'}
        >
            <Image src={'/circle.png'} objectFit={'cover'} width={'60%'} mb={'1rem'} />
            <Link to={'/'}>
                <NavigationItem icon={<BiSolidHome />} text={'Home'} />
            </Link>
            <NavigationItem icon={<BiSearchAlt />} text={'Search'} />
            <NavigationItem icon={<BiHeart />} text={'Follow'} />
            <Link to={'/me'}>
                <NavigationItem icon={<BiUser />} text={'Profile'} />
            </Link>
            <SolidButton text={'Create Vibe'} py={'1.5rem'} />
            <Spacer />
            <NavigationItem icon={<BiLogOut />} text={'Logout'} />
        </Flex>
    )
}

export default Navigation
