import { Grid, GridItem } from '@chakra-ui/react'
import { usePost } from '@/hooks/usePost'

import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import ProfileCard from '@/components/cards/ProfileCard'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import VibeList from '@/components/vibes/VibeList'
import NewVibe from '@/components/vibes/NewVibe'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import CircleSpinner from '@/components/utils/CircleSpinner'

function HomePage() {
    const [vibes, onPost] = usePost()

    if (vibes) {
        return (
            <Grid templateColumns={'repeat(19, 1fr)'}>
                <GridItem colSpan={12}>
                    <MainBar>
                        <NavigationHeading text={'Home'} disabled />
                        <NewVibe
                            placeholder={"What's on your mind?"}
                            imagePreviewId={'atHome'}
                            onPost={onPost}
                        />
                        <VibeList vibes={vibes} />
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

    return (
        <Grid templateColumns={'repeat(19, 1fr)'} height={'100vh'}>
            <GridItem colSpan={19}>
                <CircleSpinner />
            </GridItem>
        </Grid>
    )
}

export default HomePage
