import { useScroll } from '../../hooks/useScroll';

export function SectionWrapper({ children, index }) {
  const { currentSection } = useScroll();
  
  const offset = index - currentSection;
  const isActive = currentSection === index;
  
  return (
    <section 
      className="absolute inset-0 w-full h-full will-change-transform"
      style={{
        transform: `translateY(${offset * 100}%)`,
        transition: 'transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)',
        zIndex: isActive ? 10 : 5,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      <div 
        className="section-scroll-container w-full h-full overflow-y-auto overflow-x-hidden overscroll-contain"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </div>
    </section>
  );
}