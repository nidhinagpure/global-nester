import React from 'react'
import Navbar from "../components/Navbar/Navbar.jsx";
import Herosection from "../components/Herosection/Herosection.jsx";
import Footer from '../components/Footer/Footer.jsx';
import Dearmsection from "../components/Dearmsection/Dearmsection.jsx";
import PropertyCards from "../components/propertyCards/propertyCards.jsx";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Herosection/>
        <PropertyCards/>
        <Dearmsection />
        <Footer />
    </div>
  )
}

export default Home;

