import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contact = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Email Js Credentials
    emailjs.sendForm(
      'service_cdyji7d',   
      'template_9zz1c62',  
      formRef.current,
      'SvyCaChj139eDELYJ'  
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
      navigate('/');
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-secondary)] text-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between pt-4 px-10">
        <div className="text-xl font-semibold text-white cursor-pointer">
          niten.
        </div>

        <button
          onClick={() => navigate(-1)}
          className="p-2 text-white hover:text-gray-300 cursor-pointer transition"
        >
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4">
            <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 sm:px-12 lg:px-40 py-10 flex flex-col lg:flex-row justify-center">
        {/* Left: Contact Form */}
        <div className="w-full max-w-md flex items-center">
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl md:text-4xl font-semibold">Contact now</h2>
            <p className="text-gray-400">
              Have a project or question? Send me a message. I will reply within 48 hours.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border-b border-gray-700 bg-transparent px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full border-b border-gray-700 bg-transparent px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border-b border-gray-700 bg-transparent px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Write your message"
                required
                className="w-full border-b border-gray-700 bg-transparent px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]"
              />

              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <button
                type="submit"
                className="px-4 py-2 md:px-6 md:py-3.5 bg-[var(--color-primary)] text-[10px] md:text-xs mt-6 tracking-widest font-medium hover:-translate-y-2 transition-all duration-400 flex items-center rounded-full cursor-pointer uppercase text-white"
              >
                Send
                <span className="ml-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>


        {/* Right: Contact Info */}
        <div className="max-w-md lg:w-1/2 space-y-6 flex flex-col items-center h-full justify-center mt-10 lg:mt-0">
          <div className="py-10 pl-10 pr-30 flex flex-col align-start gap-10 bg-[var(--color-secondary-elevated)] shadow-md shadow-grey-900 rounded-lg">
            <div>
              <h3 className="text-sm mb-1.5">Email me at</h3>
              <p className="text-sm text-[var(--color-primary)]">nitendesign@gmail.com</p>
            </div>
            
            <div>
              <h3 className="text-sm mb-1.5">Call me at</h3>
              <p className="text-sm text-[var(--color-primary)]">+91-62964-22094</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
