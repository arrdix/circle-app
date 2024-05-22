import { Grid, GridItem, Heading, Divider } from '@chakra-ui/react'
import { fontSizing } from '../styles/style'

import MainBar from '../components/bars/MainBar'
import SideBar from '../components/bars/SideBar'
import ProfileCard from '../components/cards/ProfileCard'
import SuggestionCard from '../components/cards/SuggestionCard'
import DeveloperCard from '../components/cards/DeveloperCard'
import VibeList from '../components/vibes/VibeList'
import NewVibe from '../components/vibes/NewVibe'

function HomePage() {
    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Heading px={'1rem'} pt={'2rem'} pb={'1rem'} fontSize={fontSizing.bigger}>
                        Home
                    </Heading>
                    <NewVibe placeholder={"What's on your mind?"} />
                    <Divider borderColor={'circle.darker'} />
                    <VibeList />
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

export default HomePage
