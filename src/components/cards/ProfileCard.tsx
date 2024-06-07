import BrandCard from './BrandCard'
import ProfileCardHeader from './ProfileCardHeader'
import ProfileCardBody from './ProfileCardBody'
import ProfileCardFooter from './ProfileCardFooter'
import BrandHeading from '@/components/utilities/BrandHeading'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { UserType } from '@/types/types'

interface ProfileCardProps {
    top?: boolean
}

function ProfileCard({ top }: ProfileCardProps) {
    const loggedUser: UserType | undefined = useSelector(
        (states: RootState) => states.loggedUser.value
    )

    if (loggedUser) {
        const { avatar, bio, username, name, totalFollower, totalFollowing } = loggedUser

        return (
            <BrandCard top={top && top}>
                <BrandHeading text={'My Profile'} />
                <ProfileCardHeader buttonText={'Edit Profile'} avatar={avatar} />
                <ProfileCardBody username={username} name={name} bio={bio} />
                <ProfileCardFooter totalFollower={totalFollower} totalFollowing={totalFollowing} />
            </BrandCard>
        )
    }
}

export default ProfileCard
