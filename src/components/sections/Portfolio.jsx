import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects, otherWorks } from '../../data/portfolioData';
export function Portfolio() {
  const { shouldShow } = useScrollAnimation(3);
  const [expandedProject, setExpandedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const detailsRef = useRef(null);
  // Combine all gallery images for navigation - memoized to prevent recreating on each render
  const allGalleryImages = useMemo(() => [
    ...otherWorks.horizontal,
    ...otherWorks.vertical
  ], []);
  // Memoize navigateLightbox to fix ESLint warning
  const navigateLightbox = useCallback((direction) => {
    setLightboxIndex(prevIndex => {
      const newIndex = (prevIndex + direction + allGalleryImages.length) % allGalleryImages.length;
      setLightboxImage(allGalleryImages[newIndex]);
      return newIndex;
    });
  }, [allGalleryImages]);
  // Scroll to details when a project is expanded
  useEffect(() => {
    if (expandedProject && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [expandedProject]);
  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxImage) return;
      
      if (e.key === 'Escape') {
        setLightboxImage(null);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, navigateLightbox]);
  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);
  const handleProjectClick = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };
  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };
  const closeLightbox = () => {
    setLightboxImage(null);
  };
  const selectedProject = projects.find(p => p.id === expandedProject);
  return (
    <div className="relative min-h-full">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />
      <div className="fixed top-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-1/4 w-60 md:w-80 h-60 md:h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button - Positioned below nav on mobile, top-right on desktop */}
          <button
            onClick={closeLightbox}
            className="absolute top-20 right-4 md:top-20 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            className="absolute left-2 md:left-6 top-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            className="absolute right-2 md:right-6 top-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Image Container */}
          <div 
            className="relative max-w-[90vw] max-h-[80vh] md:max-h-[90vh] flex items-center justify-center mt-16 md:mt-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[70vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Counter - Mobile: above image, Desktop: below image */}
            <div className="absolute -bottom-10 md:bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
              {lightboxIndex + 1} / {allGalleryImages.length}
            </div>
          </div>
          {/* Thumbnail Strip - Desktop only */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-xl max-w-[80vw] overflow-x-auto">
            {allGalleryImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={(e) => { e.stopPropagation(); openLightbox(img, idx); }}
                className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden transition-all duration-200 ${
                  idx === lightboxIndex 
                    ? 'ring-2 ring-blue-500 opacity-100' 
                    : 'opacity-50 hover:opacity-75'
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Scrollable Content */}
      <div className="relative z-10 min-h-full px-4 md:px-6 py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-10 md:mb-16 transition-all duration-700
              ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <span className="text-blue-400 text-xs md:text-sm uppercase tracking-widest">Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              My <span className="text-gradient">Works</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
              A collection of brand identities and design projects that tell meaningful stories
            </p>
          </div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700
                  ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                `}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div
                  className={`group relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500
                    ${expandedProject === project.id ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-dark-900' : ''}
                  `}
                  onClick={() => handleProjectClick(project.id)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Thumbnail Image */}
                  <img 
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent transition-opacity duration-300
                    ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                  `} />
                  {/* Hover Content */}
                  <div className={`absolute inset-0 p-5 md:p-6 flex flex-col justify-between transition-all duration-300
                    ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                  `}>
                    {/* Top - Arrow Icon */}
                    <div className="flex justify-end">
                      <div className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform duration-300
                        ${hoveredProject === project.id ? 'translate-x-0 translate-y-0' : 'translate-x-4 -translate-y-4'}
                      `}>
                        <svg 
                          className={`w-5 h-5 text-white transition-transform duration-300
                            ${expandedProject === project.id ? 'rotate-180' : 'rotate-0'}
                          `} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {/* Bottom - Project Info */}
                    <div className={`transition-all duration-300 delay-75
                      ${hoveredProject === project.id ? 'translate-y-0' : 'translate-y-8'}
                    `}>
                      <span className="text-blue-400 text-xs md:text-sm font-medium uppercase tracking-wider">
                        {project.type}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mt-1 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-blue-400 text-sm font-medium">
                        <span>{expandedProject === project.id ? 'Close Details' : 'View Details'}</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Active Indicator */}
                  {expandedProject === project.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Expanded Project Details */}
          {selectedProject && (
            <div 
              ref={detailsRef}
              className="mt-8 md:mt-12 animate-fadeIn"
            >
              <div className="glass-strong rounded-2xl md:rounded-3xl overflow-hidden">
                {/* Content Grid - Image and Details side by side on desktop */}
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Full Height Image */}
                  <div className="relative">
                    <img 
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Sticky Project Content */}
                  <div className="lg:sticky lg:self-start p-6 md:p-10 space-y-8 md:space-y-10 lg:border-l border-gray-800 lg:max-h-[calc(100vh-6rem)]">
                    
                    {/* Header with Close Button */}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-blue-400 text-xs md:text-sm font-medium uppercase tracking-wider">
                          {selectedProject.type}
                        </span>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1">
                          {selectedProject.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setExpandedProject(null)}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-dark-600/50 flex items-center justify-center text-white hover:bg-dark-600 transition-colors flex-shrink-0"
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                    {/* Overview */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold">Overview</h4>
                      </div>
                      {selectedProject.overview.map((text, index) => (
                        <p key={index} className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {text}
                        </p>
                      ))}
                    </div>
                    {/* Contribution */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold">My Contribution</h4>
                      </div>
                      {selectedProject.contribution.map((text, index) => (
                        <p key={index} className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {text}
                        </p>
                      ))}
                    </div>
                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                      {['Brand Identity', 'Logo Design', 'Visual System', 'Guidelines'].map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-dark-600/50 rounded-full text-xs md:text-sm text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* View More Works Button */}
          <div 
            className={`flex justify-center mt-12 md:mt-16 transition-all duration-700
              ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: '600ms' }}
          >
            <button
              onClick={() => setShowGallery(!showGallery)}
              className="group relative inline-flex items-center gap-3 px-6 md:px-8 py-2 md:py-2.5 glass-strong rounded-full font-medium text-white text-sm md:text-base overflow-hidden transition-all duration-300 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50"
            >
              <span>{showGallery ? 'Show Less' : 'View More Works'}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${showGallery ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          {/* Other Works Gallery */}
          {showGallery && (
            <div className="mt-12 md:mt-16 animate-fadeIn">
              {/* Gallery Header */}
              <div className="mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Other <span className="text-gradient">Works</span>
                </h3>
                <p className="text-gray-400 text-sm md:text-base mt-2">
                  More design projects and explorations
                </p>
              </div>
              {/* Horizontal Images First - 2 Sets */}
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                {/* Set 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {otherWorks.horizontal.slice(0, 2).map((image, index) => (
                    <div
                      key={image.id}
                      className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-[1480/1080] cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => openLightbox(image, index)}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-colors duration-300" />
                      
                      {/* Zoom Icon on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Set 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {otherWorks.horizontal.slice(2, 4).map((image, index) => (
                    <div
                      key={image.id}
                      className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-[1480/1080] cursor-pointer"
                      style={{ animationDelay: `${(index + 2) * 100}ms` }}
                      onClick={() => openLightbox(image, index + 2)}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-colors duration-300" />
                      
                      {/* Zoom Icon on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Vertical Images - Masonry Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {otherWorks.vertical.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    onClick={() => openLightbox(image, otherWorks.horizontal.length + index)}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-colors duration-300" />
                    
                    {/* Zoom Icon on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
