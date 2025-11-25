import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScroll } from '../../hooks/useScroll';
import { personalInfo } from '../../data/portfolioData';

export function Hero() {
  const { setCurrentSection } = useScroll();
  const { shouldShow } = useScrollAnimation(0);

  return (
    <div className="relative mt-20">
      {/* Background - Fixed */}
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />
      
      {/* Floating orbs - Fixed */}
      <div className="fixed top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-blue-600/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
      <div className="fixed top-1/2 right-1/3 w-40 md:w-64 h-40 md:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      
      {/* Grid pattern - Fixed */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-full flex items-center justify-center px-4 md:px-6 py-24 md:py-32">
        <div className="w-full max-w-6xl mx-auto text-center">
          {/* Greeting badge */}
          <div 
            className={`inline-flex items-center gap-2 glass px-3 md:px-4 py-2 rounded-full mb-6 md:mb-8 transition-all duration-700
              ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm text-gray-300">Available for freelance work</span>
          </div>

          {/* Main heading */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-5 leading-tight transition-all duration-700
              ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-white">I'm </span>
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          {/* Tagline */}
          <p 
            className={`text-base md:text-lg lg:text-xl text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto px-4 transition-all duration-700
              ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: '300ms' }}
          >
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16 px-4 transition-all duration-700
              ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: '400ms' }}
          >
            <button onClick={() => setCurrentSection(3)} className="btn-primary px-6 md:px-8 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium text-white inline-flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button onClick={() => setCurrentSection(4)} className="glass border border-blue-500/30 text-white hover:bg-blue-500/20 px-6 md:px-8 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}