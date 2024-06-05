import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { UserType, VibeType } from '@/types/types'
import { useEffect, useState } from 'react'

import API from '@/networks/api'
import VibeItem from './VibeItem'

function VibeList() {
    const [vibes, setVibes] = useState<VibeType[]>([])
    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        async function getList() {
            const vibes: VibeType[] = await API.GET_ALL_VIBES()
            const users: UserType[] = await API.GET_ALL_USERS()

            setVibes(vibes.reverse())
            setUsers(users)
        }

        getList()
    }, [])

    return (
        <Box>
            {vibes.map((vibe) => {
                const author = users.find((user) => user.id === vibe.authorId)

                if (author) {
                    return (
                        <Link to={`/detail/${vibe.id}`} key={vibe.id}>
                            <VibeItem vibe={vibe} author={author} />
                        </Link>
                    )
                }
            })}
        </Box>
    )
}

export default VibeList
