import { CardFooter, Flex, Spacer } from '@chakra-ui/react'
import { BiSolidHeart, BiCommentDetail, BiDotsVerticalRounded } from 'react-icons/bi'

import VibeItemButton from './VibeItemButton'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { UserType } from '@/types/types'

interface VibeItemFooterProps {
    likes: number
    replies: number
    isLiked: boolean
    author: UserType
}

function VibeItemFooter({ likes, replies, isLiked, author }: VibeItemFooterProps) {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    return (
        <CardFooter padding={0}>
            {replies !== undefined && likes !== undefined && (
                <Flex gap={'1rem'}>
                    <VibeItemButton
                        icon={<BiSolidHeart />}
                        value={likes}
                        color={isLiked ? 'circle.red' : 'circle.dark'}
                        hoverColor={isLiked ? 'circle.dark' : 'circle.red'}
                    />
                    <VibeItemButton
                        icon={<BiCommentDetail />}
                        value={replies}
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
