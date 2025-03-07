import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NewsAndEvents from './components/pages/NewsAndEvents';
import Give from './components/pages/Give';
import ContactUs from './components/pages/ContactUs';
import JoinMc from './components/pages/JoinMc';
import AboutUs from './components/pages/AboutUs';
import Cli from './components/Cli';
import { ServiceTimes } from './components/Time';
import { RoundTableDetails } from './components/WeeklyRoundTable';
import Tcg from './components/Tcg';
import TermsOfService from './components/TermsOfService';
import FitForLife from './components/fitforlife'; // Use lowercase
import CityChurchKidsPage from './components/CityChurchKidsPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news-and-events' element={<NewsAndEvents />} />
        <Route path='/give' element={<Give />} /> 
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} /> 
        <Route path='/join-mc' element={<JoinMc />} />
        <Route path="/Cli" element={<Cli />} />
        <Route path="/service-times" element={<ServiceTimes />} />
        <Route path="/weekly-round-table" element={<RoundTableDetails />} />
        <Route path="/tcg-page" element={<Tcg />} />
        <Route path="term-of-service" element={<TermsOfService />} />
        <Route path="/fitforlife" element={<FitForLife />} />
        <Route path="/CityChurchKids" element={<CityChurchKidsPage />} />
      </Routes>
    </Router>
  );
}

export default App;