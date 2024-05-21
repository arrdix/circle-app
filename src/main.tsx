import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ChakraProvider } from '@chakra-ui/react'
import circleTheme from './themes/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={circleTheme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
)
