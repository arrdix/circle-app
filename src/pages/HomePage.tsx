import { Grid, GridItem } from '@chakra-ui/react'

import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import ProfileCard from '@/components/cards/ProfileCard'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import VibeList from '@/components/vibes/VibeList'
import NewVibe from '@/components/vibes/NewVibe'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import { useEffect } from 'react'
import API from '@/networks/api'
import { UserType, VibeType } from '@/types/types'
import { useDispatch, useSelector } from 'react-redux'
import { setVibes } from '@/features/vibes/vibesSlice'
import { RootState } from '@/redux'
import { setAllUsers } from '@/features/users/usersSlice'

function HomePage() {
    const dispatch = useDispatch()

    const vibes = useSelector((states: RootState) => states.vibes.vibes)

    useEffect(() => {
        async function getList() {
            const rawVibes: VibeType[] = await API.GET_ALL_VIBES()
            const users: UserType[] = await API.GET_ALL_USERS()

            const vibes: VibeType[] = rawVibes.map((vibe) => {
                return {
                    ...vibe,
                    author: users.find((user) => user.id === vibe.authorId),
                }
            })

            dispatch(setVibes(vibes.reverse()))
            dispatch(setAllUsers(users))
        }

        getList()
    }, [dispatch])

    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <NavigationHeading text={'Home'} disabled />
                    <NewVibe placeholder={"What's on your mind?"} />
                    <VibeList vibes={vibes} />
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
