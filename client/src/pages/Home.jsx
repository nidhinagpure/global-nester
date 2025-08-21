import React from 'react'
import Navbar from "../components/Navbar/Navbar.jsx";
import Herosection from "../components/Herosection/Herosection.jsx";
import Footer from '../components/Footer/Footer.jsx';
import Dearmsection from "../components/Dearmsection/Dearmsection.jsx";
import PropertyCards from "../components/propertyCards/propertyCards.jsx";
import Card from "./../components/Card/Cards.jsx";
import Services from "./../components/Services/Services.jsx";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Herosection/>
        <PropertyCards/>
        <Card/>
        <Services/>
        <Dearmsection />
        <Footer />
    </div>
  )
}

export default Home;

