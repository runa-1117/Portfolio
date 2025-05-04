import React, { useEffect, useState } from 'react';
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
  useEffect(() => {
    document.body.style.cursor = 'none';
  
    const createBubble = (x, y) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble-cursor';
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      document.body.appendChild(bubble);
  
      setTimeout(() => {
        bubble.remove();
      }, 1000); // 泡泡显示时间
    };
  
    const handleMouseMove = (e) => {
      createBubble(e.clientX, e.clientY);
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);  
  

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
