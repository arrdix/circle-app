import {
    CardFooter,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    Tag,
    TagLabel,
} from '@chakra-ui/react'
import { BiSolidHeart, BiCommentDetail, BiDotsVerticalRounded } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { UserType } from '@/types/types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useVibes } from '@/hooks/useVibes'

import API from '@/networks/api'
import VibeItemButton from './VibeItemButton'
import { useReplies } from '@/hooks/useReplies'

interface VibeItemFooterProps {
    vibeId: number
    totalLike: number
    totalReply: number
    isLiked: boolean
    author: UserType
    isReply?: boolean
    repliesTarget?: boolean
    badLabels: string[]
}

function VibeItemFooter({
    vibeId,
    totalLike,
    totalReply,
    isLiked,
    author,
    isReply,
    repliesTarget,
    badLabels,
}: VibeItemFooterProps) {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    const [isVibeLiked, setVibeLiked] = useState<boolean>(isLiked)
    const [totalVibeLike, setTotalVibeLike] = useState<number>(totalLike)

    const navigate = useNavigate()

    const [, , onDelete] = useVibes()
    const [, , onDeleteReply] = useReplies(vibeId)

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
            <Flex alignItems={'center'}>
                {badLabels.length > 0 &&
                    badLabels.map((label) => {
                        return (
                            <Tag
                                key={label}
                                size={'sm'}
                                variant="outline"
                                colorScheme="red"
                                ml={'.5rem'}
                                height={0}
                            >
                                <TagLabel>{label}</TagLabel>
                            </Tag>
                        )
                    })}
            </Flex>
            {loggedUser && loggedUser.id === author.id && (
                <Menu>
                    <MenuButton
                        as={VibeItemButton}
                        color={'circle.dark'}
                        icon={<BiDotsVerticalRounded fontSize={'1.5rem'} />}
                        hoverColor={'circle.accent'}
                        ml={'.5rem'}
                        atLeft
                    ></MenuButton>
                    <MenuList bg={'circle.darker'} border={0}>
                        <MenuItem
                            bg={'circle.darker'}
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()

                                if (repliesTarget) {
                                    navigate('/')
                                    return onDelete(vibeId)
                                }

                                if (isReply) {
                                    return onDeleteReply(vibeId)
                                }

                                return onDelete(vibeId)
                            }}
                        >
                            Delete
                        </MenuItem>
                    </MenuList>
                </Menu>
            )}
        </CardFooter>
    )
}

export default VibeItemFooter
