import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import './assets/base.css'
import CircleLayout from './layouts/CircleLayout'
import HomePage from './pages/HomePage'
import VibeDetailPage from './pages/VibeDetailPage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from '@/pages/SearchPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ForgotPasswordPage from '@/pages/ForgotPasswordPage'
import ResetPasswordPage from '@/pages/ResetPasswordPage'

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
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/help/forgot" element={<ForgotPasswordPage />} />
                <Route path="/help/reset" element={<ResetPasswordPage />} />
            </Routes>
        </div>
    )
}

export default App
