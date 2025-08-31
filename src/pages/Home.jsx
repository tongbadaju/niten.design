import React, { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import { initFlowbite } from 'flowbite';
import HeroSection from '../components/HeroSection';
import Works from '../components/Works';

export default function Home() {

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <HeroSection/>
      <Works/>
    </>
  );
}
