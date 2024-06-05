import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { VibeDataType } from '@/types/types'
import { useState } from 'react'

import API from '@/networks/api'
import SideBar from '@/components/bars/SideBar'
import Navigation from '@/components/navigations/Navigation'
import BrandModal from '@/components/modals/BrandModal'
import NewVibe from '@/components/vibes/NewVibe'
import useCircleToast from '@/hooks/useCircleToast'

type ContextType = { isPostedFromModal: boolean }

function CircleLayout() {
    const createToast = useCircleToast()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSafeToReset, setSafeToReset] = useState<boolean>(true)
    const [isPostedFromModal, setPostedFromModal] = useState<boolean>(false)

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
        setPostedFromModal((oldState) => !oldState)
        return onClose()
    }

    return (
        <Grid templateColumns={'repeat(24, 1fr)'}>
            <BrandModal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <Box pt={'.5rem'}>
                    <NewVibe
                        placeholder={"What's on your mind?"}
                        imagePreviewId={'atModal'}
                        isSafeToReset={isSafeToReset}
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
                <Outlet context={{ isPostedFromModal } satisfies ContextType} />
            </GridItem>
        </Grid>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useVibeModal() {
    return useOutletContext<ContextType>()
}

export default CircleLayout
