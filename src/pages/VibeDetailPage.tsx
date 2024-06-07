import { Grid, GridItem } from '@chakra-ui/react'
import { Link, Params, useParams } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { DetailedVibeType, ReplyType, VibeDataType } from '@/types/types'
import { useQuery, useQueryClient, useMutation, QueryClient } from '@tanstack/react-query'

import API from '@/networks/api'
import useCircleToast from '@/hooks/useCircleToast'
import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import ProfileCard from '@/components/cards/ProfileCard'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import VibeDetail from '@/components/vibes/VibeDetail'
import CircleSpinner from '@/components/utilities/CircleSpinner'

function VibeDetailPage() {
    const { id }: Readonly<Params<string>> = useParams()
    const targetId = id ? +id : 1

    const createToast = useCircleToast()
    const queryClient: QueryClient = useQueryClient()

    const { data: vibe } = useQuery<DetailedVibeType>({
        queryKey: ['vibe', targetId],
        queryFn: () => API.GET_SINGLE_VIBE(targetId),
    })

    const mutation = useMutation({
        mutationFn: POST_REPLY,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vibe'] })
        },
    })

    function onReply(data: VibeDataType): void {
        const formData: FormData = new FormData()

        formData.append('targetId', targetId.toString())
        formData.append('content', data.content)
        formData.append('image', data.image ? data.image[0] : null)

        mutation.mutate(formData)
    }

    async function POST_REPLY(data: FormData): Promise<ReplyType> {
        const postReply: Promise<ReplyType> = API.POST_REPLY(data)
        createToast(postReply, {
            title: 'Post Reply',
            message: 'Reply successfully posted!',
        })

        return postReply
    }

    if (vibe) {
        return (
            <Grid templateColumns={'repeat(19, 1fr)'}>
                <GridItem colSpan={12}>
                    <MainBar>
                        <Link to={'/'}>
                            <NavigationHeading icon={<BiLeftArrowAlt />} text={'Vibe'} />
                        </Link>
                        <VibeDetail vibe={vibe} onReply={onReply} />
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

    return (
        <Grid templateColumns={'repeat(19, 1fr)'} height={'100vh'}>
            <GridItem colSpan={19}>
                <CircleSpinner />
            </GridItem>
        </Grid>
    )
}

export default VibeDetailPage
