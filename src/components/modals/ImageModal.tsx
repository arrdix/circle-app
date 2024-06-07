import { Flex, Box, Image } from '@chakra-ui/react'
import { BiExitFullscreen, BiSolidArrowFromLeft, BiSolidArrowFromRight } from 'react-icons/bi'
import { fontSizing } from '@/styles/style'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DetailedVibeType, ReplyType, VibeDataType } from '@/types/types'
import { useQuery, useQueryClient, useMutation, QueryClient } from '@tanstack/react-query'

import API from '@/networks/api'
import BrandModal from '@/components/modals/BrandModal'
import GhostButton from '@/components/buttons/GhostButton'
import VibeDetail from '@/components/vibes/VibeDetail'
import useCircleToast from '@/hooks/useCircleToast'

interface ImageModalProps {
    onClose: () => void
    isOpen: boolean
    vibePhoto: string | null
}

function ImageModal({ isOpen, onClose, vibePhoto }: ImageModalProps) {
    const [hideVibe, setHideVide] = useState<boolean>(true)
    const [searchParams, setSearchParams] = useSearchParams()

    const id = searchParams.get('vibeId')
    const targetId = id ? +id : 1

    function onCloseModal(): void {
        setSearchParams({})

        onClose()
    }

    function onHideVibe(): void {
        setHideVide((oldState) => !oldState)
    }

    const createToast = useCircleToast()
    const queryClient: QueryClient = useQueryClient()

    const { data: vibe } = useQuery<DetailedVibeType>({
        queryKey: ['vibe', targetId],
        queryFn: () => API.GET_SINGLE_VIBE(targetId),
    })

    const mutation = useMutation({
        mutationFn: POST_REPLY,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vibe'] })
        },
    })

    function onReply(data: VibeDataType): void {
        const formData: FormData = new FormData()

        formData.append('targetId', targetId.toString())
        formData.append('content', data.content)
        formData.append('image', data.image ? data.image[0] : null)

        mutation.mutate(formData)
    }

    async function POST_REPLY(data: FormData): Promise<ReplyType> {
        const postReply: Promise<ReplyType> = API.POST_REPLY(data)
        createToast(postReply, {
            title: 'Post Reply',
            message: 'Reply successfully posted!',
        })

        return postReply
    }

    if (vibe) {
        return (
            <BrandModal isOpen={isOpen} onClose={onClose} size={'full'}>
                <Flex height={'100vh'}>
                    <Flex
                        pos={'relative'}
                        padding={'1rem'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        flex={2}
                    >
                        <Image
                            src={vibePhoto ? vibePhoto : undefined}
                            width={'auto'}
                            height={'auto'}
                            maxWidth={'100%'}
                            maxHeight={'100%'}
                            objectFit={'cover'}
                        />
                        <Flex
                            pos={'absolute'}
                            left={0}
                            top={0}
                            padding={'1rem'}
                            width={'100%'}
                            justifyContent={'space-between'}
                        >
                            <GhostButton onClick={onCloseModal}>
                                <Box color={'circle.font'} fontSize={fontSizing.bigger}>
                                    <BiExitFullscreen />
                                </Box>
                            </GhostButton>
                            <GhostButton onClick={onHideVibe}>
                                <Box color={'circle.font'} fontSize={fontSizing.bigger}>
                                    {hideVibe ? (
                                        <BiSolidArrowFromLeft />
                                    ) : (
                                        <BiSolidArrowFromRight />
                                    )}
                                </Box>
                            </GhostButton>
                        </Flex>
                    </Flex>
                    {hideVibe && (
                        <Box
                            py={'1rem'}
                            border={'1px'}
                            borderColor={'circle.darker'}
                            overflow={'scroll'}
                            flex={1}
                        >
                            <VibeDetail vibe={vibe} onReply={onReply} noImage />
                        </Box>
                    )}
                </Flex>
            </BrandModal>
        )
    }
}

export default ImageModal
