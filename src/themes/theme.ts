import { extendTheme } from '@chakra-ui/react'
import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    inputAnatomy.keys
)

const hollow = definePartsStyle({
    field: {
        border: '1px solid',
        borderColor: 'circle.dark',
        background: 'transparent',
        borderRadius: 'lg',
        _hover: {
            background: 'none',
            boxShadow: 'none',
            borderColor: 'circle.accent',
        },
        _active: {
            background: 'none',
            boxShadow: 'none',
            borderColor: 'circle.accent',
        },
        _focus: {
            background: 'none',
            boxShadow: 'none',
            borderColor: 'circle.accent',
        },
        _autofill: {
            transition: 'background-color 0s 600000s, color 0s 600000s',
        },
        _placeholder: {
            color: 'circle.dark',
        },
    },
})

const inputTheme = defineMultiStyleConfig({
    variants: { hollow },
})

const circleTheme = extendTheme({
    colors: {
        circle: {
            backdrop: '#171717',
            backdropAccent: '#1c1c1c',
            font: '#dedede',
            dark: '#505050',
            darker: '#1f1f1f',
            red: '#D71913',
            accent: '#8e3e63',
            darkAccent: '#703450',
            error: '#cc0000',
            green: '#006e45',
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
    components: { Input: inputTheme },
})

export default circleTheme
