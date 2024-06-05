import { Grid, GridItem } from '@chakra-ui/react'
import { Link, Params, useParams } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDetailedVibe } from '@/features/vibes/vibesSlice'
import { RootState } from '@/redux'
import { DetailedVibeType, UserType } from '@/types/types'

import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import ProfileCard from '@/components/cards/ProfileCard'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import VibeDetail from '@/components/vibes/VibeDetail'
import API from '@/networks/api'

function VibeDetailPage() {
    const { id }: Readonly<Params<string>> = useParams()
    const vibe = useSelector((states: RootState) => states.vibes.detailedVibe)

    const dispatch = useDispatch()

    useEffect(() => {
        async function getDetailedVibe() {
            if (id) {
                const vibe: DetailedVibeType = await API.GET_DETAILED_VIBE(+id)
                const user: UserType = await API.GET_USER(vibe.authorId)
                const users: UserType[] = await API.GET_ALL_USERS()

                const detailedVibe: DetailedVibeType = {
                    ...vibe,
                    author: user,
                    replies: vibe.replies.map((reply) => {
                        return {
                            ...reply,
                            author: users.find((user) => user.id === reply.authorId),
                        }
                    }),
                }

                dispatch(setDetailedVibe(detailedVibe))
            }
        }

        getDetailedVibe()
    }, [id, dispatch])

    if (vibe) {
        return (
            <Grid templateColumns={'repeat(19, 1fr)'}>
                <GridItem colSpan={12}>
                    <MainBar>
                        <Link to={'/'}>
                            <NavigationHeading icon={<BiLeftArrowAlt />} text={'Vibe'} />
                        </Link>
                        <VibeDetail vibe={vibe} />
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
