import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import { VibeDataType } from '@/types/types'

import API from '@/networks/api'
import SideBar from '@/components/bars/SideBar'
import Navigation from '@/components/navigations/Navigation'
import BrandModal from '@/components/modals/BrandModal'
import NewVibe from '@/components/vibes/NewVibe'
import useCircleToast from '@/hooks/useCircleToast'

function CircleLayout() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const createToast = useCircleToast()
    const queryClient: QueryClient = useQueryClient()

    async function onPost(data: VibeDataType): Promise<void> {
        const formData: FormData = new FormData()

        formData.append('content', data.content)
        formData.append('image', data.image[0])

        mutation.mutate(formData)

        onClose()
    }

    const mutation = useMutation({
        mutationFn: POST_VIBE,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vibes'] })
        },
    })

    async function POST_VIBE(data: FormData): Promise<string> {
        const postVIbe: Promise<string> = API.POST_VIBE(data)
        createToast(postVIbe, {
            title: 'Post Vibe',
            message: 'Vibe successfully posted!',
        })

        return postVIbe
    }

    return (
        <Grid templateColumns={'repeat(24, 1fr)'}>
            <BrandModal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <Box pt={'.5rem'}>
                    <NewVibe
                        placeholder={"What's on your mind?"}
                        imagePreviewId={'atModal'}
                        onPost={onPost}
                    />
                </Box>
            </BrandModal>
            <GridItem colSpan={5}>
                <SideBar>
                    <Navigation onOpen={onOpen} />
                </SideBar>
            </GridItem>
            <GridItem colSpan={19}>
                <Outlet />
            </GridItem>
        </Grid>
    )
}

export default CircleLayout
