import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../data/portfolioData';

export function About() {
  const { shouldShow } = useScrollAnimation(1);

  return (
    <div className="relative lg:mt-20">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />
      <div className="fixed top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-full px-4 md:px-6 py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left - Image & Download Button */}
            <div 
              className={`space-y-6 md:space-y-8 transition-all duration-700
                ${shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}
              `}
            >
              {/* Profile image */}
              <div className="relative">
                <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl rotate-6 opacity-50" />
                  <div className="absolute inset-0 glass-strong rounded-3xl overflow-hidden">
                    <img 
                      src="avatar.png"
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Experience badge */}
                  <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 glass-strong rounded-xl md:rounded-2xl p-3 md:p-4 glow-box">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">2+</div>
                    <div className="text-[10px] md:text-xs text-gray-400">Years Exp.</div>
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              <a 
                href="https://docs.google.com/document/d/1WDjvxwCQZUkV4XAMGuItQ5oH7XLAqkXg/edit?usp=sharing&ouid=101377916888086743853&rtpof=true&sd=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center lg:justify-start"
              >
                <button
                  className="group relative inline-flex items-center gap-3 px-6 md:px-8 py-2 md:py-2.5 border-2 border-blue-500 rounded-full font-medium text-blue-400 text-sm md:text-base overflow-hidden transition  -all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {/* Icon */}
                  <div className="relative w-5 h-5 md:w-6 md:h-6">
                    <svg 
                      className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    <svg 
                      className="absolute inset-0 opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                      />
                    </svg>
                  </div>
                  
                  <span>Download Resume</span>
                </button>
              </a>
            </div>

            {/* Right - Content */}
            <div 
              className={`space-y-6 md:space-y-8 transition-all duration-700 delay-200
                ${shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
              `}
            >
              {/* Section header */}
              <div>
                <span className="text-blue-400 text-xs md:text-sm uppercase tracking-widest">About Me</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 md:mb-6">
                  Crafting Digital
                  <span className="text-gradient"> Excellence</span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">
                  With over 8 years of experience in graphic design, I've had the privilege of working 
                  with startups, agencies, and Fortune 500 companies. My passion lies in creating 
                  visual experiences that not only look stunning but also drive results.
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  I believe great design is about solving problems and telling stories. Every project 
                  is an opportunity to create something meaningful that connects brands with their audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}