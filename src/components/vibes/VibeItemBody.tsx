import { CardBody, Text, Image } from '@chakra-ui/react'
import { fontSizing } from '@/styles/style'

import GhostButton from '@/components/buttons/GhostButton'
import { useSearchParams } from 'react-router-dom'

interface VibeItemBodyProps {
    vibeId: number
    vibeContent: string
    vibeImage: string | null
    onOpen: () => void
}

function VibeItemBody({ vibeContent, vibeId, vibeImage, onOpen }: VibeItemBodyProps) {
    const [, setSearchParams] = useSearchParams()

    function onPhotoClick(): void {
        setSearchParams({ vibeId: String(vibeId) })

        onOpen()
    }

    return (
        <CardBody padding={0}>
            <Text fontSize={fontSizing.small} mb={'.75rem'}>
                {vibeContent}
            </Text>
            {vibeImage && (
                <GhostButton onClick={onPhotoClick}>
                    <Image
                        src={vibeImage}
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
