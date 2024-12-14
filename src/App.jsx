import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';

import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute Default */}
        <Route path="/" element={<div>Welcome to the App Hue hue</div>} />

        {/* Rute ke Halaman Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </Routes>
    </BrowserRouter>
  )
}

export default App