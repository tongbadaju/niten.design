import { useEffect, useRef, useCallback } from 'react';
import { useScroll } from './useScroll';

export function useFullPageScroll() {
  const { nextSection, prevSection, isAnimating, currentSection } = useScroll();
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const lastScrollTime = useRef(0);

  // Get the current section's scrollable container
  const getCurrentSectionContainer = useCallback(() => {
    const containers = document.querySelectorAll('.section-scroll-container');
    return containers[currentSection] || null;
  }, [currentSection]);

  // Check if we can scroll within the section
  const canScrollInSection = useCallback((direction) => {
    const container = getCurrentSectionContainer();
    if (!container) return false;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const isScrollable = scrollHeight > clientHeight;

    if (!isScrollable) return false;

    if (direction === 'up') {
      // Can scroll up if not at top
      return scrollTop > 1;
    } else {
      // Can scroll down if not at bottom
      return scrollTop < scrollHeight - clientHeight - 1;
    }
  }, [getCurrentSectionContainer]);

  const handleSectionChange = useCallback((direction) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 800 || isAnimating) return false;

    // Check if section content is scrollable
    if (canScrollInSection(direction)) {
      return false; // Let the section scroll naturally
    }

    lastScrollTime.current = now;

    if (direction === 'down') {
      nextSection();
    } else {
      prevSection();
    }
    return true;
  }, [nextSection, prevSection, isAnimating, canScrollInSection]);

  useEffect(() => {
    // Wheel event for desktop
    const handleWheel = (e) => {
      const direction = e.deltaY > 0 ? 'down' : 'up';
      
      // If section content can scroll, don't prevent default
      if (canScrollInSection(direction)) {
        return;
      }

      e.preventDefault();
      
      if (Math.abs(e.deltaY) < 10) return;
      
      handleSectionChange(direction);
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (isAnimating) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (!canScrollInSection('down')) {
          e.preventDefault();
          handleSectionChange('down');
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (!canScrollInSection('up')) {
          e.preventDefault();
          handleSectionChange('up');
        }
      }
    };

    // Touch events for mobile
    let touchStartScrollTop = 0;

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
      
      const container = getCurrentSectionContainer();
      touchStartScrollTop = container ? container.scrollTop : 0;
    };

    const handleTouchEnd = (e) => {
      if (isAnimating) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      
      const diffY = touchStartY.current - touchEndY;
      const diffX = Math.abs(touchStartX.current - touchEndX);

      // Must be a vertical swipe (not horizontal)
      if (Math.abs(diffY) < 50 || diffX > Math.abs(diffY)) {
        return;
      }

      const direction = diffY > 0 ? 'down' : 'up';
      const container = getCurrentSectionContainer();

      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const isScrollable = scrollHeight > clientHeight;

        if (isScrollable) {
          // Check if user was scrolling content
          const scrollDiff = Math.abs(container.scrollTop - touchStartScrollTop);
          
          // If there was significant scroll within content, don't change section
          if (scrollDiff > 10) {
            return;
          }

          // At top and swiping up - go to previous section
          if (direction === 'up' && scrollTop <= 1) {
            handleSectionChange('up');
            return;
          }

          // At bottom and swiping down - go to next section
          if (direction === 'down' && scrollTop >= scrollHeight - clientHeight - 1) {
            handleSectionChange('down');
            return;
          }

          // Otherwise, let content scroll
          return;
        }
      }

      // No scrollable content, change section
      handleSectionChange(direction);
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleSectionChange, isAnimating, canScrollInSection, getCurrentSectionContainer]);
}