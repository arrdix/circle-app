import { Link } from 'react-router-dom'
import { Grid, GridItem, Card } from '@chakra-ui/react'
import { BiLeftArrowAlt } from 'react-icons/bi'

import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import ProfileCardHeader from '@/components/cards/ProfileCardHeader'
import ProfileCardBody from '@/components/cards/ProfileCardBody'
import ProfileCardFooter from '@/components/cards/ProfileCardFooter'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import BrandTabs from '@/components/utilities/BrandTabs'
import VibeList from '@/components/vibes/VibeList'
import MediaCollection from '@/components/utilities/MediaCollection'

function ProfilePage() {
    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <NavigationHeading icon={<BiLeftArrowAlt />} text={'Jesse Pinkman 💀'} />
                    </Link>
                    <Card bg={'circle.backdrop'} px={'1rem'} color={'circle.font'} mb={'1.5rem'}>
                        <ProfileCardHeader buttonText={'Edit Profile'} />
                        <ProfileCardBody py={'1rem'} />
                        <ProfileCardFooter />
                    </Card>
                    <BrandTabs
                        leftTitle={'Vibes'}
                        leftContent={<VibeList />}
                        rightTitle={'Media'}
                        rightContent={<MediaCollection />}
                    />
                </MainBar>
            </GridItem>
            <GridItem colSpan={7}>
                <SideBar>
                    <SuggestionCard top />
                    <DeveloperCard />
                </SideBar>
            </GridItem>
        </Grid>
    )
}

export default ProfilePage
