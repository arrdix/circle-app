import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from '@/states/index.ts'
import circleTheme from './themes/theme.ts'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <ChakraProvider theme={circleTheme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraProvider>
        </React.StrictMode>
    </Provider>
)
