// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Benefits from './pages/Benefits'
import EarlyAccess from './pages/EarlyAccess'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/early-access" element={<EarlyAccess />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    
  )
}

export default App
