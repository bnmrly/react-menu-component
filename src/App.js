import React from 'react';
import Menu from './components/Menu/Menu';
import './App.css';

// Routes
import { Router } from '@reach/router';
import Home from './components/Routes/Home/Home';
import Profile from './components/Routes/Profile/Profile';
import MyBookings from './components/Routes/MyBookings/MyBookings';
import MyPayments from './components/Routes/MyPayments/MyPayments';
import Support from './components/Routes/Support/Support';
import Contact from './components/Routes/Contact/Contact';
import Logout from './components/Routes/Logout/Logout';
import About from './components/Routes/About/About';
import Faq from './components/Routes/Faq/Faq';

function App() {
  return (
    <div className="app__container">
      <header className="app__header">
        <Menu />
      </header>
      <Router>
        <Home path="/" />
        <Profile path="/profile" />
        <MyBookings path="/my-bookings" />
        <MyPayments path="/my-payments" />
        <Support path="/support" />
        <Contact path="/contact" />
        <Logout path="/logout" />
        <About path="/about" />
        <Faq path="/faq" />
      </Router>
    </div>
  );
}

export default App;
