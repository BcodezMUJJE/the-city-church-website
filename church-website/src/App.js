import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Removed useNavigate import
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
import FitForLife from './components/fitforlife';
import CityChurchKidsPage from './components/CityChurchKidsPage';
import BookLibrary from './components/BookLibrary';
import ConnectionCard from './components/ConnectionCard';
import NeedPrayer from './components/NeedPrayer';
import SupportMission from './components/SupportMission';
import PartnerWithUs from './components/PartnerWithUs';
import Slida from './components/Slida';
import Locations from './components/Locations';
import NewSteps from './components/NewSteps';

// ScrollToTop Component to handle scroll reset
const ScrollToTop = () => {
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [location]); // Runs whenever the route changes

  return null; // This component doesn't render anything visible
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />  {/* This ensures scroll to top on route change */}
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
        <Route path="/bookLib" element={<BookLibrary />} />
        <Route path="/ConnectionCardLin" element={<ConnectionCard />} />
        <Route path="/PrayerRequestForm" element={<NeedPrayer />} />
        <Route path="/supportMission" element={<SupportMission />} />
        <Route path="/partnerWithUs" element={<PartnerWithUs />} />
        <Route path="/slida" element={<Slida />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/nextSteps" element={<NewSteps />} /> {/* Redirect to Home for any unknown routes */}
      </Routes>
    </Router>
  );
};

export default App;