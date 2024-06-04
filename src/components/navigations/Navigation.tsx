import { Link, useNavigate } from 'react-router-dom'
import { Flex, Spacer, Image } from '@chakra-ui/react'
import { BiSolidHome, BiSearchAlt, BiHeart, BiUser, BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { unsetLoggedUser } from '@/features/auth/authSlice'
import API from '@/networks/api'

import NavigationItem from './NavigationItem'
import SolidButton from '@/components/buttons/SolidButton'

interface NavigationProps {
    onOpen: () => void
}

function Navigation({ onOpen }: NavigationProps) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function onLogout() {
        API.SET_TOKEN('')
        dispatch(unsetLoggedUser())

        navigate('/')
    }

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
            <Link to={'/search'}>
                <NavigationItem icon={<BiSearchAlt />} text={'Search'} />
            </Link>
            <Link to={'/follows'}>
                <NavigationItem icon={<BiHeart />} text={'Follows'} />
            </Link>
            <Link to={'/me'}>
                <NavigationItem icon={<BiUser />} text={'Profile'} />
            </Link>
            <SolidButton onClick={onOpen} text={'Create Vibe'} py={'1.5rem'} />
            <Spacer />

            <NavigationItem icon={<BiLogOut />} text={'Logout'} onLogout={onLogout} />
        </Flex>
    )
}

export default Navigation
