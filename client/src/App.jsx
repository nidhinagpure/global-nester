import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';

const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default index

