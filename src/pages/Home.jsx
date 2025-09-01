import React, { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import { initFlowbite } from 'flowbite';
import HeroSection from '../components/HeroSection';
import Works from '../components/Works';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

export default function Home() {

  useEffect(() => {
    initFlowbite();

    AOS.init({
      duration: 900,
      once: true,    
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Works/>
      <Footer/>
    </>
  );
}
