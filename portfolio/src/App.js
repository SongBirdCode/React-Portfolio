import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import About  from './components/about';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
function App() {
  return (
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path='/about' element={<About />} />
          {/* <Route path='/contact' element={< />} /> */}
          {/* <Route path='/home' element={<Home />} /> */}
          {/* <Route path='/portfolio' element={<Portfolio/>} /> */}
        </Routes>
      </Router>
  );
}

export default App;