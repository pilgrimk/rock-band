import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Music from '../components/MusicSection'
import Band from '../components/BandSection'
import Footer from '../components/Footer'
import TourDates from '../components/TourDatesSection'

const band_name_value = "Rock Band"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar
                isOpen={isOpen}
                toggle={toggle} />
            <Navbar
                band_name={band_name_value}
                toggle={toggle} />
            <HeroSection />
            <Music />
            <TourDates  />
            <Band />
            <Footer
                band_name={band_name_value} />
        </>
    )
}

export default Home