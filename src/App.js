
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Intro  from './components/Intro';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'



function App() {
  return (
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path='/' element={<Intro />} />
          {<Route path='/contact' element={< Contact />} /> }
          {<Route path='/intro' element={<Intro />} /> }
          {<Route path='/portfolio' element={<Portfolio/>} />}
      
        </Routes>
      </Router>
  );
}

export default App;