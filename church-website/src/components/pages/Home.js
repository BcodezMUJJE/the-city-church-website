import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Slida from '../Slida';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Slida />
            <Footer />
        </>
    );
}

export default Home;