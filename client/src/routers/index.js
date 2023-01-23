import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../assets/css/style.css'

import HomePage from '../pages/Home/index'
import AddPage from '../pages/Add/index'

export default function IndexRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  )
}
