import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-primary)] text-white flex flex-col overflow-y-scroll md:overflow-hidden">
      {/* Header */}
      <div className="flex justify-between pt-4 px-10">
        <div className="text-xl font-semibold text-white cursor-pointer">
          niten.
        </div>

        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="p-2 text-white hover:text-gray-300 cursor-pointer transition"
        >
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
            <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">

          <div className="flex justify-center md:justify-start">
            <img
              className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg"
              src="avatar-bg.png" 
              alt="Logo Design"
            />
          </div>

          <div className="mt-8 md:mt-0 md:max-w-md">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-15">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                  Niten Rai
                </h2>

                <div className="flex flex-col gap-6 sm:gap-14 text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed">
                  <p>
                    A graphic designer based in Sikkim, India. I specialize in 
                    logo design, brand identity, and visual design. I enjoy 
                    creating designs that are simple, meaningful, and help brands 
                    connect with their audience.
                  </p>

                  <p>
                    Whether it's a fresh new logo or a complete brand identity, 
                    I focus on making visuals that tell a story and leave a 
                    lasting impression.
                  </p>

                  <div>
                    Email me at<br />
                    <span className="font-medium break-all">nitendesign@gmail.com</span>
                  </div>


                  <div className="flex flex-wrap gap-4 uppercase text-xs tracking-widest">
                    <a href="https://instagram.com/sekwabubu" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition">Instagram</a>
                    <a href="https://linkedin.com/in/niten-rai-926a111b9/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;