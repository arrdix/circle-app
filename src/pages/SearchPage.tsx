import { Flex, Grid, GridItem } from '@chakra-ui/react'

import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import ProfileCard from '@/components/cards/ProfileCard'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import AccountCard from '@/components/cards/AccountCard'
import IconInput from '@/components/inputs/IconInput'

function SearchPage() {
    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <IconInput />
                    <Flex direction={'column'} gap={'1rem'} px={'1rem'} mt={'1rem'}>
                        <AccountCard includeBio />
                        <AccountCard />
                        <AccountCard includeBio />
                        <AccountCard includeBio />
                        <AccountCard />
                        <AccountCard />
                        <AccountCard />
                        <AccountCard includeBio />
                    </Flex>
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

export default SearchPage
