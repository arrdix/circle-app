import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import SideBar from '@/components/bars/SideBar'
import Navigation from '@/components/navigations/Navigation'
import BrandModal from '@/components/modals/BrandModal'
import NewVibe from '@/components/vibes/NewVibe'

function CircleLayout() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Grid templateColumns={'repeat(24, 1fr)'}>
            <GridItem colSpan={5}>
                <SideBar>
                    <Navigation onOpen={onOpen} />
                </SideBar>
            </GridItem>
            <GridItem colSpan={19}>
                <Outlet />
            </GridItem>
            <BrandModal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <Box pt={'.5rem'}>
                    <NewVibe placeholder={"What's on your mind?"} />
                </Box>
            </BrandModal>
        </Grid>
    )
}

export default CircleLayout
