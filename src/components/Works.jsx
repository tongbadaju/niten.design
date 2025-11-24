import React, { useState } from 'react';
import { projects } from '../resources/content';
import { Link } from 'react-router-dom';

export default function Works() {
  const [showGallery, setShowGallery] = useState(false);

  const singleCombinedGalleryImage = 'works/other-works.avif';

  return (
    <>
      {/* Skill 1: Logo Design */}
      <section className="px-4 py-10 lg:px-8 lg:py-14 w-full flex justify-center bg-[var(--color-secondary-elevated)]">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div data-aos="fade-right">
              <img className="rounded-xl w-md" src="skills/skill1.png" alt="Logo Design" />
            </div>
            <div className="mt-5 sm:mt-10 lg:mt-0" data-aos="fade-left">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl">Logo Design</h2>
                  <div className="text-gray-400 flex flex-col gap-3 text-base">
                    <p>
                      I design logos that do more than just look good — they connect.
                      Whether it's modern minimalism or deep symbolism, my goal is to
                      create visual identities that reflect a brand's core vision and
                      speak directly to its audience.
                    </p>
                    <p>
                      Every logo I create is grounded in strong design principles,
                      aligned with current trends, and crafted to tell a story that
                      feels real and relevant.
                    </p>
                    <p>
                      I believe a great logo isn't just seen — it's felt. That's what I aim to deliver with every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Skill 2: Brand Identity */}
      <section className="px-4 py-10 lg:px-8 lg:py-14 w-full flex justify-center">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="md:grid md:grid-cols-2 md:items-center space-y-6 md:gap-12 xl:gap-32">
            <div className="mt-5 sm:mt-10 lg:mt-0" data-aos="fade-right">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl">Brand Identity</h2>
                  <div className="text-gray-400 flex flex-col gap-3 text-base">
                    <p>
                      I build brand identities that go beyond visuals. From color
                      palettes to typography, every detail is chosen with purpose,
                      shaped by the brand's personality and what it stands for.
                    </p>
                    <p>
                      I help brands find their voice and express it clearly across
                      all touchpoints, so they feel consistent, memorable, and real.
                      Blending strategic thinking with clean, thoughtful design, I
                      craft identities that not only look sharp but resonate with
                      the people they're meant for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <img className="rounded-xl w-md" src="skills/skill2.png" alt="Brand Identity" />
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Works Section */}
      <section id="works" className="px-6 py-10 lg:px-8 lg:py-14 w-full flex justify-center bg-[var(--color-secondary-elevated)] scroll-mt-24">
        <div className="w-7xl">
          <div className="mx-auto mb-8" data-aos="fade-right">
            <h2 className="font-bold text-3xl lg:text-4xl">My Works</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                data-aos="fade-up"
                className="group relative block h-[400px] w-full rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/80 bg-opacity-90 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0-10h10v10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Expanded Gallery Section (Now displaying a single combined image) */}
          {showGallery && (
            <div className="mt-10" data-aos="fade-up">
              <div className="mx-auto mb-8" data-aos="fade-right">
                <h2 className="font-bold text-3xl lg:text-4xl">Other Works</h2>
              </div>
              {/* This replaces the masonry grid with a single centered image */}
              <div className="flex justify-center">
                <img
                  className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 ease-in-out"
                  src={singleCombinedGalleryImage}
                  alt="Combined Gallery Image"
                />
              </div>
            </div>
          )}

          {/* More Works / Show Less Button */}
          <div className="flex justify-center mt-10" data-aos="fade-up">
            <button
              onClick={() => setShowGallery(!showGallery)}
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>{showGallery ? 'Show Less' : 'View More Works'}</span>
              <svg
                className="w-5 h-5 transition-transform duration-300"
                style={{ transform: showGallery ? 'rotate(180deg)' : 'rotate(0deg)' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}