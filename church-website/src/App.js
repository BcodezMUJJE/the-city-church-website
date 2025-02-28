import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NewsAndEvents from './components/pages/NewsAndEvents'; // Only import once
import Give from './components/pages/Give';
import ContactUs from './components/pages/ContactUs';
import JoinMc from './components/pages/JoinMc';
import AboutUs from './components/pages/AboutUs';
import Cli from './components/Cli';

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
      </Routes>
    </Router>
  );
}

export default App;