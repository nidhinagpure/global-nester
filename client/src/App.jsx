import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Login from "./pages/Login/Login.jsx";

import "./style.css";


const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default index

