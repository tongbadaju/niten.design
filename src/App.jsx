import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Works from './components/Works';

export default function App() {
  return (
    // Router to enable client-side navigation
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex flex-col items-center flex-grow mt-15">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}