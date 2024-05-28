import { CardFooter } from '@chakra-ui/react'
import { BiSolidHeart, BiCommentDetail } from 'react-icons/bi'

import VibeItemButton from './VibeItemButton'

interface VibeItemFooterProps {
    likes: number
    replies: number
    isLiked: boolean
}

function VibeItemFooter({ likes, replies, isLiked }: VibeItemFooterProps) {
    return (
        <CardFooter display={'flex'} alignItems={'center'} gap={'1rem'} padding={0}>
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
                hoverColor={'circle.darker'}
            />
        </CardFooter>
    )
}

export default VibeItemFooter
