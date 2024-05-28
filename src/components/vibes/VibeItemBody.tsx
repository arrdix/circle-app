import { CardBody, Text, Image } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import GhostButton from '@/components/buttons/GhostButton'
import { useSearchParams } from 'react-router-dom'

interface VibeItemBodyProps {
    vibe: string
    vibeId: number
    vibePhoto: string | null
    onOpen: () => void
}

function VibeItemBody({ vibe, vibeId, vibePhoto, onOpen }: VibeItemBodyProps) {
    const [, setSearchParams] = useSearchParams()

    function onPhotoClick(): void {
        setSearchParams({ vibeId: String(vibeId) })

        onOpen()
    }

    return (
        <CardBody padding={0}>
            <Text fontSize={fontSizing.small} mb={'.75rem'}>
                {vibe}
            </Text>
            {vibePhoto && (
                <GhostButton onClick={onPhotoClick}>
                    <Image
                        src={vibePhoto}
                        objectFit={'cover'}
                        maxWidth={'100%'}
                        width={'auto'}
                        height={'auto'}
                        borderRadius={'lg'}
                    />
                </GhostButton>
            )}
        </CardBody>
    )
}

export default VibeItemBody
