import { Grid, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { UserType } from '@/types/types'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'

import API from '@/networks/api'
import MainBar from '@/components/bars/MainBar'
import SideBar from '@/components/bars/SideBar'
import SuggestionCard from '@/components/cards/SuggestionCard'
import DeveloperCard from '@/components/cards/DeveloperCard'
import BrandTabs from '@/components/utilities/BrandTabs'
import AccountListCard from '@/components/cards/AccountListCard'
import NavigationHeading from '@/components/navigations/NavigationHeading'
import ProfileCard from '@/components/cards/ProfileCard'

function FollowsPage() {
    const [followers, setFollowers] = useState<UserType[]>([])
    const [followings, setFollowings] = useState<UserType[]>([])

    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    useEffect(() => {
        async function getUsers() {
            const users: UserType[] = await API.GET_ALL_USERS()

            if (loggedUser) {
                setFollowers(() => {
                    return users.filter((user) => {
                        return loggedUser.followers.some((follower) => follower.ownerId === user.id)
                    })
                })

                setFollowings(() => {
                    return users.filter((user) => {
                        return loggedUser.followings.some(
                            (following) => following.targetId === user.id
                        )
                    })
                })
            }
        }

        getUsers()
    }, [loggedUser])

    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <NavigationHeading icon={<BiLeftArrowAlt />} text={'Follows'} sticky />
                    </Link>
                    <BrandTabs
                        leftTitle={'Followers'}
                        leftContent={<AccountListCard accounts={followers} />}
                        rightTitle={'Following'}
                        rightContent={<AccountListCard accounts={followings} />}
                    />
                </MainBar>
            </GridItem>
            <GridItem colSpan={7}>
                <SideBar>
                    <ProfileCard />
                    <SuggestionCard />
                    <DeveloperCard />
                </SideBar>
            </GridItem>
        </Grid>
    )
}

export default FollowsPage
