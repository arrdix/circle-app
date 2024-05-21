import './assets/base.css'

import { Grid, GridItem } from '@chakra-ui/react'
import MainBar from './components/bars/MainBar'
import SideBar from './components/bars/SideBar'
import Navigation from './components/navigations/Navigation'
import ProfileCard from './components/cards/ProfileCard'
import SuggestionCard from './components/cards/SuggestionCard'
import DeveloperCard from './components/cards/DeveloperCard'

function App() {
    return (
        <div className="app">
            <Grid templateColumns={'repeat(10, 1fr)'}>
                <GridItem colSpan={2}>
                    <SideBar>
                        <Navigation />
                    </SideBar>
                </GridItem>
                <GridItem colSpan={5}>
                    <MainBar />
                </GridItem>
                <GridItem colSpan={3}>
                    <SideBar>
                        <ProfileCard />
                        <SuggestionCard />
                        <DeveloperCard />
                    </SideBar>
                </GridItem>
            </Grid>
        </div>
    )
}

export default App
