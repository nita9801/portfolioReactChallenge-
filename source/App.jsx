import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/Components/Header.jsx';
import Footer from '@/Components/Footer.jsx';
import Home from '@/pages/AboutMe.jsx';
import Portfolio from '@/pages/Portfolio.jsx';
import Contact from '@/pages/Contact.jsx';
import Resume from '@/pages/Resume.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
      <Routes>
          <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      </main>
      <div className="footer-container">
        <Footer />
      </div>
    </Router>
  );
};

export default App;