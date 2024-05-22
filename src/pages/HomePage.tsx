import { Grid, GridItem } from '@chakra-ui/react'

import MainBar from '../components/bars/MainBar'
import SideBar from '../components/bars/SideBar'
import ProfileCard from '../components/cards/ProfileCard'
import SuggestionCard from '../components/cards/SuggestionCard'
import DeveloperCard from '../components/cards/DeveloperCard'
import VibeList from '../components/vibes/VibeList'
import NewVibe from '../components/vibes/NewVibe'
import NavigationHeading from '../components/navigations/NavigationHeading'

function HomePage() {
    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <NavigationHeading text={'Home'} />
                    <NewVibe placeholder={"What's on your mind?"} />
                    <VibeList />
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

export default HomePage
