import { Grid, GridItem } from '@chakra-ui/react'
import { Link, Params, useParams } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'

import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import ProfileCard from '@/components/cards/ProfileCard'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import VibeDetail from '@/components/vibes/VibeDetail'

function VibeDetailPage() {
    const { id }: Readonly<Params<string>> = useParams()
    const parsedId: number = id ? parseInt(id, 10) : NaN

    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <NavigationHeading icon={<BiLeftArrowAlt />} text={'Vibe'} />
                    </Link>
                    <VibeDetail id={parsedId} />
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

export default VibeDetailPage
