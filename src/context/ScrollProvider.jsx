import { useState, useCallback } from 'react';
import { ScrollContext } from './ScrollContext';

export function ScrollProvider({ children }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSections = 5;

  const goToSection = useCallback((index) => {
    if (isAnimating || index < 0 || index >= totalSections) return;
    
    setIsAnimating(true);
    setCurrentSection(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating, totalSections]);

  const nextSection = useCallback(() => {
    goToSection(currentSection + 1);
  }, [currentSection, goToSection]);

  const prevSection = useCallback(() => {
    goToSection(currentSection - 1);
  }, [currentSection, goToSection]);

  const value = {
    currentSection,
    setCurrentSection: goToSection,
    isAnimating,
    totalSections,
    nextSection,
    prevSection
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}