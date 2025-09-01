import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../resources/content';
import { motion as Motion } from 'framer-motion';
import { slideUpDown } from '../resources/animations';

export default function WorkDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) return <div className="p-10 text-center text-gray-500">Project not found.</div>;

    return (
        <Motion.div className="fixed inset-0 z-50 bg-[var(--color-secondary)] text-white flex flex-col overflow-y-scroll"
        variants={slideUpDown}
        initial="initial"
        animate="animate"
        exit="exit">
            {/* Header */}
            <div className="flex justify-between pt-4 px-4 md:px-10">
                <div className="text-xl font-semibold text-white cursor-pointer">niten.design</div>
                <button
                    onClick={() => navigate('/')}
                    className="p-2 text-white hover:text-gray-300 cursor-pointer transition"
                >
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
                        <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 md:items-start md:gap-12 xl:gap-20">

                    {/* Left: Image */}
                    <div className="flex justify-center md:justify-start">
                        {project.image && (
                            <div className="mb-10">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        )}
                    </div>

                    {/* Right: Description */}
                    <div className="md:mt-0 md:max-w-md space-y-10">
    
                        <h2 className="space-y-2">
                            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">{project.title}</h2>
                            <p>{project.type}</p>
                        </h2>

                        <div className="flex flex-col gap-6 sm:gap-14 text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed">
                            <div className="space-y-2">
                                <h2 className="font-semibold">Project Overview</h2>
                                <p className="text-gray-400">{project.overview}</p>
                            </div>

                            <div className="space-y-2">
                                <h2 className="font-semibold">My Contributions</h2>
                                <p className="text-gray-400">{project.contribution}</p>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </Motion.div>
    );
}