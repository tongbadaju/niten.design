import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScroll } from '../../hooks/useScroll';
import { services } from '../../data/portfolioData';

export function Services() {
  const { setCurrentSection } = useScroll();
  const { shouldShow } = useScrollAnimation(2);

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
          </div>

          {/* Bottom CTA Section */}
          <div 
            className={`mt-20 md:mt-32 text-center transition-all duration-700 delay-500
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