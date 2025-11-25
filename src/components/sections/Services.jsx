import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScroll } from '../../hooks/useScroll';
import { services } from '../../data/portfolioData';

export function Services() {
  const { setCurrentSection } = useScroll();
  const { shouldShow } = useScrollAnimation(2);

  // Icons for Visual Design features
  const visualDesignFeatures = [
    { 
      name: 'Typography', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      )
    },
    { 
      name: 'Color Theory', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    { 
      name: 'Layout & Composition', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    { 
      name: 'Visual Hierarchy', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      name: 'Social Media Design', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    },
    { 
      name: 'Marketing Graphics', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
  ];

  return (
    <div className="relative min-h-full">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-60 md:w-80 h-60 md:h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-full px-4 md:px-6 py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-12 md:mb-16 lg:mb-20 transition-all duration-700
              ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <span className="text-blue-400 text-xs md:text-sm uppercase tracking-widest">What I Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              Services & <span className="text-gradient">Expertise</span>
            </h2>
          </div>

          {/* Services */}
          <div className="space-y-20 md:space-y-32">
            {/* Service 1 - Logo Design */}
            <div 
              className={`transition-all duration-700 delay-200
                ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
              `}
            >
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                {/* Image - Square 448x448 */}
                <div className="relative group order-1 lg:order-1">
                  <div className="relative mx-auto lg:mx-0 w-full max-w-[448px] aspect-square">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image container */}
                    <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden glass-strong">
                      <img 
                        src={services[0].image}
                        alt={services[0].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-24 h-24 md:w-32 md:h-32 border-2 border-blue-500/30 rounded-2xl md:rounded-3xl -z-10" />
                    <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-xl md:rounded-2xl -z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="order-2 lg:order-2 space-y-4 md:space-y-6">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {services[0].title}
                  </h3>
                  
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {services[0].description}
                  </p>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {services[0].additionalText}
                  </p>
                  
                  {/* Quote */}
                  <div className="relative pl-4 md:pl-6 border-l-2 border-blue-500/50">
                    <p className="text-gray-300 text-sm md:text-base italic leading-relaxed">
                      "{services[0].quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Brand Identity */}
            <div 
              className={`transition-all duration-700 delay-400
                ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
              `}
            >
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                {/* Content - Reversed order on desktop */}
                <div className="order-2 lg:order-1 space-y-4 md:space-y-6">
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {services[1].title}
                  </h3>
                  
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {services[1].description}
                  </p>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {services[1].additionalText}
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2">
                    {['Color Palettes', 'Typography', 'Brand Voice', 'Visual Systems'].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image - Portrait 448x560 */}
                <div className="relative group order-1 lg:order-2">
                  <div className="relative mx-auto lg:mx-0 lg:ml-auto w-full max-w-[448px] aspect-[448/560]">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image container */}
                    <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden glass-strong">
                      <img 
                        src={services[1].image}
                        alt={services[1].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-24 h-24 md:w-32 md:h-32 border-2 border-purple-500/30 rounded-2xl md:rounded-3xl -z-10" />
                    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-purple-500/10 rounded-xl md:rounded-2xl -z-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 - Visual Design (No Photo - Card Layout) */}
            <div 
              className={`transition-all duration-700 delay-500
                ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
              `}
            >
              <div className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8 md:mb-12">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4 md:mb-6">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                      {services[2].title}
                    </h3>
                    
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                      {services[2].description}
                    </p>
                    
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-3">
                      {services[2].additionalText}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {visualDesignFeatures.map((feature, index) => (
                      <div 
                        key={index} 
                        className="group flex flex-col items-center text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <span className="text-gray-300 text-sm md:text-base font-medium">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div 
            className={`mt-20 md:mt-32 text-center transition-all duration-700 delay-600
              ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <div className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 max-w-3xl mx-auto relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                  Have a project in mind?
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
                  Let's work together to create something amazing. I'm always excited to take on new challenges and bring fresh ideas to life.
                </p>
                <button onClick={() => setCurrentSection(4)} className="btn-primary px-6 md:px-8 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium text-white inline-flex items-center gap-2">
                  Start a Conversation
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
