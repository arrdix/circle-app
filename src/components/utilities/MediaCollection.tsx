import { fontSizing } from '@/styles/style'
import { VibeType } from '@/types/types'
import { Flex, Grid, Image, Text, useDisclosure } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

import GhostButton from '@/components/buttons/GhostButton'
import ImageModal from '@/components/modals/ImageModal'

interface MediaCollectionProps {
    vibes: VibeType[]
}

function MediaCollection({ vibes }: MediaCollectionProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [, setSearchParams] = useSearchParams()

    function onImageClick(id: number): void {
        setSearchParams({ vibeId: String(id) })

        onOpen()
    }

    if (vibes.length) {
        return (
            <Grid
                templateColumns={'repeat(3, 1fr)'}
                templateRows={'repeat(1, 150px)'}
                autoRows={'150px'}
                gap={'.5rem'}
                padding={'1rem'}
            >
                {vibes.map((vibe) => {
                    if (vibe.image) {
                        return (
                            <GhostButton onClick={() => onImageClick(vibe.id)}>
                                <Image
                                    src={vibe.image}
                                    height={'100%'}
                                    width={'100%'}
                                    objectFit={'cover'}
                                />
                                <ImageModal
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    vibePhoto={vibe.image}
                                />
                            </GhostButton>
                        )
                    }
                })}
            </Grid>
        )
    }

    return (
        <Flex direction={'column'} alignItems={'center'} mt={'3rem'} width={'100%'}>
            <Text fontSize={fontSizing.big} fontWeight={'600'} color={'circle.dark'}>
                No media has been posted at this moment.
            </Text>
        </Flex>
    )
}

export default MediaCollection
