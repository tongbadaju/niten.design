import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import WorkDetail from './pages/WorkDetail';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    // Router to enable client-side navigation
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex flex-col items-center flex-grow mt-15">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/work/:id" element={<WorkDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}