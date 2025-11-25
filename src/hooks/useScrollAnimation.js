import { useState, useEffect, useRef } from 'react';
import { useScroll } from './useScroll';

export function useScrollAnimation(sectionIndex) {
  const { currentSection } = useScroll();
  const [hasAnimated, setHasAnimated] = useState(false);
  const isActive = currentSection === sectionIndex;
  const wasActive = useRef(false);
  
  useEffect(() => {
    if (isActive && !wasActive.current) {
      // Small delay to ensure smooth animation after slide
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 100);
      wasActive.current = true;
      return () => clearTimeout(timer);
    }
  }, [isActive]);
  
  // Reset animation state when scrolling away and back
  useEffect(() => {
    if (!isActive) {
      wasActive.current = false;
      // Optional: reset animation when section is far away
      if (Math.abs(currentSection - sectionIndex) > 1) {
        setHasAnimated(false);
      }
    }
  }, [isActive, currentSection, sectionIndex]);
  
  return {
    isActive,
    hasAnimated,
    // Show content = either actively viewing OR has been viewed (keeps content visible during exit)
    shouldShow: hasAnimated || isActive
  };
}