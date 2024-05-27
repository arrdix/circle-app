import { Grid, GridItem } from '@chakra-ui/react'
import { getVibe } from '@/utils/api'
import { VibeType } from '@/types/types'
import { Link, Params, useParams } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'

import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import ProfileCard from '@/components/cards/ProfileCard'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import VibeList from '@/components/vibes/VibeList'
import VibeItem from '@/components/vibes/VibeItem'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import NewVibe from '@/components/vibes/NewVibe'

function VibeDetailPage() {
    const { id }: Readonly<Params<string>> = useParams()
    const parsedId: number = id ? parseInt(id, 10) : NaN

    const vibe: VibeType | undefined = getVibe(parsedId)

    if (vibe) {
        return (
            <Grid templateColumns={'repeat(19, 1fr)'}>
                <GridItem colSpan={12}>
                    <MainBar>
                        <Link to={'/'}>
                            <NavigationHeading icon={<BiLeftArrowAlt />} text={'Vibe'} />
                        </Link>
                        <VibeItem
                            id={vibe.id}
                            content={vibe.content}
                            createdAt={vibe.createdAt}
                            likes={vibe.likes}
                            replies={vibe.replies}
                            isLiked={vibe.isLiked}
                            user={vibe.user}
                        />
                        <NewVibe placeholder={'Post your reply'} buttonText={'Reply'} />
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
}

export default VibeDetailPage
