import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import './assets/base.css'
import CircleLayout from './layouts/CircleLayout'
import HomePage from './pages/HomePage'
import VibeDetailPage from './pages/VibeDetailPage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from '@/pages/SearchPage'

function App() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }, [pathname])

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<CircleLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/detail/:id" element={<VibeDetailPage />} />
                    <Route path="/me" element={<ProfilePage />} />
                    <Route path="/search" element={<SearchPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
