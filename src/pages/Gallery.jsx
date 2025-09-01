import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { slideUpDown } from '../resources/animations';

const Gallery = () => {
    const navigate = useNavigate();

    const imageCount = 9; 
    const baseUrl = 'gallery/';

    const imageUrls = Array.from({ length: imageCount }, (_, i) =>
        `${baseUrl}image-${i}.jpg`
    );

    return (
        <Motion.div className="fixed inset-0 z-50 bg-[var(--color-secondary)] text-white flex flex-col overflow-y-scroll"
        variants={slideUpDown}
        initial="initial"
        animate="animate"
        exit="exit">
            {/* Header */}
            <div className="flex justify-between pt-4 px-4 md:px-10">
                <div className="text-xl font-semibold text-white cursor-pointer">
                    niten.design
                </div>

                <button
                onClick={() => navigate('/')} // Navigate back to the previous page
                className="p-2 text-white hover:text-gray-300 cursor-pointer transition"
                >
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
                        <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {imageUrls.map((src, index) => (
                        <div key={index}>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={src}
                                alt={`Gallery image ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Motion.div>
    );
}

export default Gallery;