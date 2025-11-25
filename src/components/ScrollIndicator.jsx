import { useScroll } from '../hooks/useScroll';

export function ScrollIndicator() {
  const { currentSection, totalSections, setCurrentSection } = useScroll();

  return (
    <>
      {/* Side dots navigation - visible on all screens */}
      <div className="fixed right-1.5 lg:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 lg:gap-4">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300
              ${currentSection === index 
                ? 'bg-blue-500 scale-125 shadow-lg shadow-blue-500/50' 
                : 'bg-gray-600 hover:bg-gray-400'
              }
            `}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll/Swipe down indicator */}
      {currentSection < totalSections - 1 && (
        <div className="fixed bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] lg:text-xs uppercase tracking-widest text-gray-400">
            <span className="hidden sm:inline">Scroll</span>
            <span className="sm:hidden">Swipe</span>
          </span>
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-2 lg:w-1.5 lg:h-3 bg-blue-500 rounded-full mt-1.5 lg:mt-2 animate-bounce" />
          </div>
        </div>
      )}
    </>
  );
}