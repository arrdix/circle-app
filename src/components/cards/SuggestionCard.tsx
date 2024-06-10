import { Flex } from '@chakra-ui/react'
import { UserType } from '@/types/types'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'

import API from '@/networks/api'
import AccountCard from './AccountCard'
import BrandCard from './BrandCard'
import BrandHeading from '@/components/utilities/BrandHeading'
import CircleSpinner from '@/components/utilities/CircleSpinner'

function SuggestionCard() {
    const [users, setUsers] = useState<UserType[]>([])
    const loggedUser: UserType | undefined = useSelector(
        (states: RootState) => states.loggedUser.value
    )

    useEffect(() => {
        async function getUsers() {
            const rawUsers: UserType[] = await API.GET_ALL_USERS()

            if (users.length > 3) return

            if (loggedUser) {
                const users = rawUsers.filter((user) => {
                    return !user.isFollowed && user.id !== loggedUser.id
                })
                setUsers(users)
            }
        }

        getUsers()
    }, [loggedUser, users])

    if (users.length) {
        return (
            <BrandCard>
                <BrandHeading text={'Suggested accounts'} />
                <Flex direction={'column'} gap={'1rem'}>
                    {users.map((user) => (
                        <AccountCard
                            key={user.id}
                            username={user.username}
                            name={user.name}
                            bio={user.bio}
                            avatar={user.avatar}
                            noBio
                        />
                    ))}
                </Flex>
            </BrandCard>
        )
    }

    return (
        <BrandCard>
            <BrandHeading text={'Suggested accounts'} />
            <CircleSpinner />
        </BrandCard>
    )
}

export default SuggestionCard
