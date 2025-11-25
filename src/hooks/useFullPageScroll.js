import { useEffect, useRef, useCallback } from 'react';
import { useScroll } from './useScroll';

export function useFullPageScroll() {
  const { nextSection, prevSection, isAnimating, currentSection } = useScroll();
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const touchStartTime = useRef(0);
  const touchStartScrollTop = useRef(0);
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
    const isScrollable = scrollHeight > clientHeight + 5; // 5px threshold

    if (!isScrollable) return false;

    if (direction === 'up') {
      return scrollTop > 5;
    } else {
      return scrollTop < scrollHeight - clientHeight - 5;
    }
  }, [getCurrentSectionContainer]);

  const handleSectionChange = useCallback((direction) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 800 || isAnimating) return false;

    if (canScrollInSection(direction)) {
      return false;
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

      if (canScrollInSection(direction)) {
        return;
      }

      e.preventDefault();

      if (Math.abs(e.deltaY) < 10) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 800 || isAnimating) return;
      lastScrollTime.current = now;

      if (direction === 'down') {
        nextSection();
      } else {
        prevSection();
      }
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

    // Touch start - capture initial values
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
      touchStartTime.current = Date.now();

      const container = getCurrentSectionContainer();
      touchStartScrollTop.current = container ? container.scrollTop : 0;
    };

    // Touch end - determine if we should change section
    const handleTouchEnd = (e) => {
      if (isAnimating) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndTime = Date.now();

      const diffY = touchStartY.current - touchEndY;
      const diffX = Math.abs(touchStartX.current - touchEndX);
      const timeDiff = touchEndTime - touchStartTime.current;

      // Calculate velocity for better swipe detection
      const velocity = Math.abs(diffY) / timeDiff;

      // Adjusted thresholds for better detection
      const minSwipeDistance = 30; // Reduced from 50 for easier swiping
      const minVelocity = 0.2; // Minimum velocity threshold

      // Must have minimum swipe distance
      if (Math.abs(diffY) < minSwipeDistance) return;

      // Must be primarily vertical (allow some horizontal movement)
      if (diffX > Math.abs(diffY) * 0.8) return;

      // Need either good velocity OR large distance
      if (velocity < minVelocity && Math.abs(diffY) < 80) return;

      const direction = diffY > 0 ? 'down' : 'up';
      const container = getCurrentSectionContainer();

      if (container) {
        const { scrollHeight, clientHeight } = container;
        const isScrollable = scrollHeight > clientHeight + 5;

        if (isScrollable) {
          const currentScrollTop = container.scrollTop;
          const scrollDiff = Math.abs(currentScrollTop - touchStartScrollTop.current);

          // Check position at END of touch, not start
          const atTop = currentScrollTop <= 5;
          const atBottom = currentScrollTop >= scrollHeight - clientHeight - 5;

          // If user scrolled content significantly during touch, be more careful
          if (scrollDiff > 20) {
            // Still allow section change if at boundaries AND swiping in that direction
            // AND started at the boundary too
            if (direction === 'up' && atTop && touchStartScrollTop.current <= 5) {
              prevSection();
              return;
            }
            if (direction === 'down' && atBottom && touchStartScrollTop.current >= scrollHeight - clientHeight - 5) {
              nextSection();
              return;
            }
            // Otherwise, user was scrolling content, don't change section
            return;
          }

          // At top and swiping up - go to previous section
          if (direction === 'up' && atTop) {
            prevSection();
            return;
          }

          // At bottom and swiping down - go to next section
          if (direction === 'down' && atBottom) {
            nextSection();
            return;
          }

          // Not at boundary, let content scroll naturally (do nothing)
          return;
        }
      }

      // No scrollable content or no container, change section directly
      if (direction === 'down') {
        nextSection();
      } else {
        prevSection();
      }
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
  }, [handleSectionChange, isAnimating, canScrollInSection, getCurrentSectionContainer, nextSection, prevSection]);
}
