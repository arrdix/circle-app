import { CardFooter, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import { BiSolidHeart, BiCommentDetail, BiDotsVerticalRounded } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { UserType } from '@/types/types'
import { useState } from 'react'

import API from '@/networks/api'
import VibeItemButton from './VibeItemButton'
import { useNavigate } from 'react-router-dom'

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

    const navigate = useNavigate()

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

    async function onDelete() {
        await API.DELETE_VIBE(vibeId)
    }

    return (
        <CardFooter padding={0}>
            {totalReply !== undefined && totalLike !== undefined && (
                <Flex gap={'1rem'}>
                    <VibeItemButton
                        icon={<BiSolidHeart />}
                        value={totalVibeLike}
                        color={isVibeLiked ? 'circle.red' : 'circle.dark'}
                        hoverColor={isVibeLiked ? 'circle.dark' : 'circle.red'}
                        onClick={onToggleLike}
                    />
                    <VibeItemButton
                        icon={<BiCommentDetail />}
                        value={totalReply}
                        color={'circle.dark'}
                        hoverColor={'circle.accent'}
                        onClick={() => navigate(`/vibe/${vibeId}`)}
                    />
                </Flex>
            )}
            <Spacer />
            {loggedUser && loggedUser.id === author.id && (
                <Menu>
                    <MenuButton
                        as={VibeItemButton}
                        color={'circle.dark'}
                        icon={<BiDotsVerticalRounded fontSize={'1.5rem'} />}
                        hoverColor={'circle.accent'}
                    ></MenuButton>
                    <MenuList bg={'circle.darker'} border={0}>
                        <MenuItem bg={'circle.darker'} onClick={onDelete}>
                            Delete
                        </MenuItem>
                    </MenuList>
                </Menu>
            )}
        </CardFooter>
    )
}

export default VibeItemFooter
