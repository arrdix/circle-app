import { Heading } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

import BrandCard from './BrandCard'
import ProfileCardHeader from './ProfileCardHeader'
import ProfileCardBody from './ProfileCardBody'
import ProfileCardFooter from './ProfileCardFooter'

function ProfileCard() {
    return (
        <BrandCard top>
            <Heading fontWeight={'700'} fontSize={fontSizing.big} mb={'1rem'}>
                My Profile
            </Heading>
            <ProfileCardHeader />
            <ProfileCardBody />
            <ProfileCardFooter />
        </BrandCard>
    )
}

export default ProfileCard
