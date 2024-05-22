import { Routes, Route } from 'react-router-dom'

import './assets/base.css'
import CircleLayout from './layouts/CircleLayout'
import HomePage from './pages/HomePage'
import VibeDetailPage from './pages/VibeDetailPage'
import ProfilePage from './pages/ProfilePage'

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<CircleLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/detail/:id" element={<VibeDetailPage />} />
                    <Route path="/me" element={<ProfilePage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
