import { Flex, Text, Image } from '@chakra-ui/react'
import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { fontSizing } from '../../styles/style'

import BrandCard from './BrandCard'
import GhostButton from '../buttons/GhostButton'

function DeveloperCard() {
    return (
        <BrandCard>
            <Flex color={'circle.dark'} alignItems={'center'} gap={'.5rem'}>
                <Text color={'circle.font'} fontSize={fontSizing.normal}>
                    Developed by @arrdix
                </Text>
                <Text color={'circle.dark'} fontSize={fontSizing.normal}>
                    •
                </Text>
                <GhostButton color="circle.dark">
                    <BiLogoGithub fontSize={fontSizing.bigger} />
                </GhostButton>
                <GhostButton color="circle.dark">
                    <BiLogoLinkedinSquare fontSize={fontSizing.bigger} />
                </GhostButton>
                <GhostButton color="circle.dark">
                    <BiLogoInstagram fontSize={fontSizing.bigger} />
                </GhostButton>
                <GhostButton color="circle.dark">
                    <BiLogoTwitter fontSize={fontSizing.bigger} />
                </GhostButton>
            </Flex>
            <Flex color={'circle.dark'} fontSize={fontSizing.small} alignItems={'end'}>
                Powered by
                <Image src={'/dumbways-logo.png'} boxSize={'1rem'} display={'inline'} mx=".5rem" />
                DumbWays Indonesia
            </Flex>
        </BrandCard>
    )
}

export default DeveloperCard
