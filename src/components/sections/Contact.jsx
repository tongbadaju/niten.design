import { useState, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import emailjs from 'emailjs-com';

export function Contact() {
  const { shouldShow } = useScrollAnimation(4);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_cdyji7d',
      'template_9zz1c62',
      formRef.current,
      'SvyCaChj139eDELYJ'
    )
    .then(() => {
      setLoading(false);
      alert('Message sent successfully!');
      formRef.current.reset();
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      setLoading(false);
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again.');
    });
  };

  const contactInfo = [
    { icon: 'email', label: 'Email', value: personalInfo.email },
    { icon: 'location', label: 'Location', value: personalInfo.location }
  ];

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white text-sm font-medium">Sending your message...</p>
          </div>
        </div>
      )}

      <div className="relative min-h-full">
        {/* Background */}
        <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />
        <div className="fixed top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-1/4 left-1/4 w-52 md:w-80 h-52 md:h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Scrollable Content */}
        <div className="relative z-10 min-h-full px-4 md:px-6 pt-24 pb-7 lg:pt-48">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left - Info */}
              <div 
                className={`space-y-6 md:space-y-8 transition-all duration-700
                  ${shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}
                `}
              >
                <div>
                  <span className="text-blue-400 text-xs md:text-sm uppercase tracking-widest">Get in Touch</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 md:mb-6">
                    Let's Create
                    <span className="text-gradient"> Together</span>
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                    Have a project in mind? I'd love to hear about it. Let's discuss how we can 
                    bring your vision to life.
                  </p>
                </div>

                {/* Contact info */}
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                        {info.icon === 'email' && (
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {info.icon === 'location' && (
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="text-xs md:text-sm text-gray-500">{info.label}</div>
                        <a 
                          href={info.icon === 'email' ? `mailto:${info.value}` : undefined}
                          className={`text-white text-sm md:text-base font-medium ${info.icon === 'email' ? 'hover:text-blue-400 transition-colors' : ''}`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div>
                  <h4 className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-3 md:mb-4">Follow Me</h4>
                  <div className="flex gap-3 md:gap-4">
                    {['linkedin', 'instagram'].map((social, index) => (
                      <a
                        key={index}
                        href={personalInfo.social[social]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                          {social === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                          {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-gray-500 text-xs md:text-sm">
                    I typically respond within 48 hours. Looking forward to hearing from you!
                  </p>
                </div>
              </div>

              {/* Right - Form */}
              <div
                className={`transition-all duration-700 delay-200
                  ${shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
                `}
              >
                <Card className="p-4 md:p-6">
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-xs md:text-sm text-gray-400 mb-1.5 md:mb-2">Your Name <span className="text-red-600">*</span></label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-dark-600/50 border border-gray-700 rounded-lg md:rounded-xl text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm text-gray-400 mb-1.5 md:mb-2">Your Email <span className="text-red-600">*</span></label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-dark-600/50 border border-gray-700 rounded-lg md:rounded-xl text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm text-gray-400 mb-1.5 md:mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-dark-600/50 border border-gray-700 rounded-lg md:rounded-xl text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm text-gray-400 mb-1.5 md:mb-2">Your Message <span className="text-red-600">*</span></label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-dark-600/50 border border-gray-700 rounded-lg md:rounded-xl text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="btn-primary w-full justify-center px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium text-white inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                      {!loading && (
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      )}
                    </button>

                    <p className="text-gray-500 text-xs text-center">
                      <span className="text-red-600">*</span> Required fields
                    </p>
                  </form>
                </Card>
              </div>
            </div>

            {/* Footer */}
            <div 
              className={`text-center mt-10 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 transition-all duration-700 delay-400
                ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <p className="text-gray-500 text-xs md:text-sm">
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}