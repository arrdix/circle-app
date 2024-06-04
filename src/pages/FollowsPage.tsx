import { Grid, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'

import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import BrandTabs from '@/components/utilities/BrandTabs'
import AccountListCard from '@/components/cards/AccountListCard'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import ProfileCard from '@/components/cards/ProfileCard'

function FollowsPage() {
    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <NavigationHeading icon={<BiLeftArrowAlt />} text={'Follows'} />
                    </Link>
                    <BrandTabs
                        leftTitle={'Followers'}
                        leftContent={<AccountListCard />}
                        rightTitle={'Following'}
                        rightContent={<AccountListCard />}
                    />
                </MainBar>
            </GridItem>
            <GridItem colSpan={7}>
                <SideBar>
                    <ProfileCard top />
                    <SuggestionCard />
                    <DeveloperCard />
                </SideBar>
            </GridItem>
        </Grid>
    )
}

export default FollowsPage
