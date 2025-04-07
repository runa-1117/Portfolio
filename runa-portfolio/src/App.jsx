import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/Navigation/NavBar';
import Footer from './component/Navigation/Footer';
import Home from './component/Home/Home';
import Projects from './component/Project/Projects';
import About from './component/About/About';
// import Contact from './component/Contact/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; 


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} /> 
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 
