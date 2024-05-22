import { Tabs, TabList, Tab, TabPanels, TabPanel, TabIndicator } from '@chakra-ui/react'
import { tabStyle } from '../../styles/style'

import VibeList from '../vibes/VibeList'

function BrandTabs() {
    return (
        <Tabs isLazy>
            <TabList display={'flex'} justifyContent={'center'}>
                <Tab flex={1} _selected={tabStyle} _hover={tabStyle} _active={tabStyle}>
                    Vibes
                </Tab>
                <Tab flex={1} _selected={tabStyle} _hover={tabStyle} _active={tabStyle}>
                    Media
                </Tab>
            </TabList>
            <TabIndicator
                mt={'-1.5px'}
                height={'1.5px'}
                bg={'circle.accent'}
                borderRadius={'1px'}
            />
            <TabPanels>
                <TabPanel padding={0}>
                    <VibeList />
                </TabPanel>
                <TabPanel>
                    <p>Under Maintenance ⚠️</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default BrandTabs
