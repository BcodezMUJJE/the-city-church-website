import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from './components/pages/Home';
import NewAndEvents from './components/pages/NewsAndEvents';
import Give from './components/pages/Give';
import ContactUs from './components/pages/ContactUs';
import JoinMc from './components/pages/JoinMc';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-and-events' Component={NewAndEvents}/>
          <Route path='/give' Component={Give}/>
          <Route path='/contact-us' Component={ContactUs}/>
          <Route path='/join-mc' Component={JoinMc}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;