import { extendTheme } from '@chakra-ui/react'

const circleTheme = extendTheme({
    colors: {
        circle: {
            backdrop: '#171717',
            backdropAccent: '#1c1c1c',
            font: '#dedede',
            dark: '#757575',
            darker: '#1f1f1f',
            red: '#D71913',
            accent: '#8e3e63',
            darkAccent: '#703450',
        },
    },
    styles: {
        global: {
            body: {
                fontFamily: 'Inter',
                color: '#dedede',
                bg: '#171717',
                fontSize: '14.5px',
            },
        },
    },
})

export default circleTheme
