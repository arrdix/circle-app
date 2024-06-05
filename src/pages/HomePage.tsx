import { Grid, GridItem } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { UserType, VibeDataType, VibeType } from '@/types/types'
import { useDispatch, useSelector } from 'react-redux'
import { setVibes } from '@/features/vibes/vibesSlice'
import { RootState } from '@/redux'
import { setAllUsers } from '@/features/users/usersSlice'
import { useVibeModal } from '@/layouts/CircleLayout'

import API from '@/networks/api'
import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import ProfileCard from '@/components/cards/ProfileCard'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import VibeList from '@/components/vibes/VibeList'
import NewVibe from '@/components/vibes/NewVibe'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import useCircleToast from '@/hooks/useCircleToast'

function HomePage() {
    const dispatch = useDispatch()
    const createToast = useCircleToast()

    const vibes = useSelector((states: RootState) => states.vibes.vibes)
    const { isPostedFromModal } = useVibeModal()
    const [isSafeToReset, setSafeToReset] = useState<boolean>(true)
    const [reload, setReload] = useState<boolean>(true)

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
    }, [dispatch, reload, isPostedFromModal])

    async function onPost(data: VibeDataType) {
        const watchedPromise = postHandler(data)
        setSafeToReset((oldState) => !oldState)
        createToast(watchedPromise, {
            title: 'Post vibe',
            message: 'Vibe successfully posted!',
        })
    }

    async function postHandler(data: VibeDataType) {
        const formData = new FormData()
        formData.append('content', data.content)
        formData.append('image', data.image[0])

        await API.POST_VIBE(formData)

        setSafeToReset((oldState) => !oldState)
        return setReload((oldState) => !oldState)
    }

    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <NavigationHeading text={'Home'} disabled />
                    <NewVibe
                        placeholder={"What's on your mind?"}
                        imagePreviewId={'atHome'}
                        isSafeToReset={isSafeToReset}
                        onPost={onPost}
                    />
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
