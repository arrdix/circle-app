import BrandCard from './BrandCard'
import ProfileCardHeader from './ProfileCardHeader'
import ProfileCardBody from './ProfileCardBody'
import ProfileCardFooter from './ProfileCardFooter'
import BrandHeading from '@/components/utils/BrandHeading'

interface ProfileCardProps {
    top?: boolean
}

function ProfileCard({ top }: ProfileCardProps) {
    return (
        <BrandCard top={top && top}>
            <BrandHeading text={'My Profile'} />
            <ProfileCardHeader buttonText={'Edit Profile'} />
            <ProfileCardBody />
            <ProfileCardFooter />
        </BrandCard>
    )
}

export default ProfileCard
