import { CardFooter, Flex, Spacer } from '@chakra-ui/react'
import { BiSolidHeart, BiCommentDetail, BiDotsVerticalRounded } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { UserType } from '@/types/types'
import { useState } from 'react'

import API from '@/networks/api'
import VibeItemButton from './VibeItemButton'

interface VibeItemFooterProps {
    vibeId: number
    totalLike: number
    totalReply: number
    isLiked: boolean
    author: UserType
}

function VibeItemFooter({ vibeId, totalLike, totalReply, isLiked, author }: VibeItemFooterProps) {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    const [isVibeLiked, setVibeLiked] = useState<boolean>(isLiked)
    const [totalVibeLike, setTotalVibeLike] = useState<number>(totalLike)

    // optimistic updates
    async function onToggleLike() {
        try {
            await API.TOGGLE_LIKE(vibeId)

            setVibeLiked((oldState) => !oldState)
            setTotalVibeLike((oldState) => {
                if (!isVibeLiked) {
                    return oldState + 1
                }

                return oldState - 1
            })
        } catch (error) {
            setVibeLiked(isLiked)
            setTotalVibeLike(totalLike)
        }
    }

    return (
        <CardFooter padding={0}>
            {totalReply !== undefined && totalLike !== undefined && (
                <Flex gap={'1rem'}>
                    <VibeItemButton
                        onClick={onToggleLike}
                        icon={<BiSolidHeart />}
                        value={totalVibeLike}
                        color={isVibeLiked ? 'circle.red' : 'circle.dark'}
                        hoverColor={isVibeLiked ? 'circle.dark' : 'circle.red'}
                    />
                    <VibeItemButton
                        icon={<BiCommentDetail />}
                        value={totalReply}
                        color={'circle.dark'}
                        hoverColor={'circle.accent'}
                    />
                </Flex>
            )}
            <Spacer />
            {loggedUser && loggedUser.id === author.id && (
                <VibeItemButton
                    icon={<BiDotsVerticalRounded />}
                    color={'circle.dark'}
                    hoverColor={'circle.accent'}
                />
            )}
        </CardFooter>
    )
}

export default VibeItemFooter
