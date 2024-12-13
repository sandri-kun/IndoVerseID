import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute Default */}
        <Route path="/" element={<div>Welcome to the App Hue hue</div>} />

        {/* Rute ke Halaman Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App