import { Grid, GridItem } from '@chakra-ui/react'

import MainBar from '../components/bars/MainBar'
import SideBar from '../components/bars/SideBar'
import ProfileCard from '../components/cards/ProfileCard'
import SuggestionCard from '../components/cards/SuggestionCard'
import DeveloperCard from '../components/cards/DeveloperCard'

function VibeDetailPage() {
    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <h1>Hola Amigoes</h1>
                </MainBar>
            </GridItem>
            <GridItem colSpan={7}>
                <SideBar>
                    <ProfileCard />
                    <SuggestionCard />
                    <DeveloperCard />
                </SideBar>
            </GridItem>
        </Grid>
    )
}

export default VibeDetailPage
