import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Grid, GridItem } from '@chakra-ui/react'
import { VibeDataType, VibeType } from '@/types/types'

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
    const createToast = useCircleToast()
    const queryClient: QueryClient = useQueryClient()

    const { data: vibes } = useQuery<VibeType[]>({
        queryKey: ['vibes'],
        queryFn: API.GET_ALL_VIBES,
    })

    const mutation = useMutation({
        mutationFn: POST_VIBE,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vibes'] })
        },
    })

    function onPost(data: VibeDataType): void {
        const formData: FormData = new FormData()

        formData.append('content', data.content)
        formData.append('image', data.image[0])

        mutation.mutate(formData)
    }

    async function POST_VIBE(data: FormData): Promise<string> {
        const postVIbe: Promise<string> = API.POST_VIBE(data)
        createToast(postVIbe, {
            title: 'Post Vibe',
            message: 'Vibe successfully posted!',
        })

        return postVIbe
    }

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
                        <ProfileCard top />
                        <SuggestionCard />
                        <DeveloperCard />
                    </SideBar>
                </GridItem>
            </Grid>
        )
    }
}

export default HomePage
