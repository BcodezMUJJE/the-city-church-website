import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Slida from '../Slida';
import Locations from '../Locations';


function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Slida />
            <Locations />
            <Footer />
        </>
    );
}

export default Home;