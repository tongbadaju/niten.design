import { useState } from 'react';
import { useScroll } from '../hooks/useScroll';
import { navItems } from '../data/portfolioData';

export function Navigation() {
  const { currentSection, setCurrentSection } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setCurrentSection(0); }}
            className="text-2xl font-bold text-gradient"
          >
            niten.design
          </a>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`nav-link text-sm font-medium uppercase tracking-wider
                  ${currentSection === item.id ? 'text-blue-400 active' : 'text-gray-400 hover:text-white'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => setCurrentSection(4)}
            className="btn-primary px-6 py-2 rounded-full text-sm font-semibold text-white"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 lg:hidden">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setCurrentSection(0); }}
            className="text-xl font-bold text-gradient"
          >
            niten.design
          </a>

          {/* Hamburger / Close Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 glass rounded-lg flex items-center justify-center relative"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {/* Top line */}
            <span 
              className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ease-in-out
                ${isMenuOpen 
                  ? 'rotate-45 top-1/2 -translate-y-1/2' 
                  : 'rotate-0 top-[13px]'
                }
              `}
            />
            {/* Middle line */}
            <span 
              className={`absolute w-5 h-0.5 bg-white top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
              `}
            />
            {/* Bottom line */}
            <span 
              className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ease-in-out
                ${isMenuOpen 
                  ? '-rotate-45 top-1/2 -translate-y-1/2' 
                  : 'rotate-0 bottom-[13px]'
                }
              `}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          absolute top-full left-4 right-4 mt-2 glass-strong rounded-2xl overflow-hidden
          transition-all duration-300
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setCurrentSection(item.id); setIsMenuOpen(false); }}
                className={`w-full text-left text-sm px-4 py-2.5 rounded-xl transition-colors
                  ${currentSection === item.id ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300 hover:bg-white/5'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
