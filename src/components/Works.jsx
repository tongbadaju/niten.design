import React from 'react';

const projects = [
    {
        title: "Kotha",
        description: "A modern property rental platform with a clean and minimal identity designed to reflect simplicity, trust, and scalability.",
        image: "works/work1.png",
        link: "#"
    },
    {
        title: "Aroha",
        description: "A gender-neutral fashion brand merging minimalist design with traditional handloom fabrics, crafted in collaboration with rural artisans.",
        image: "works/work2.png",
        link: "#"
    },
    {
        title: "Wild Nest",
        description: "An eco-conscious hospitality brand with a nature-inspired identity, blending sustainability, comfort, and harmony with the wild.",
        image: "works/work3.png",
        link: "#"
    },
];

export default function Works() {

    return (
        <>
            {/* Skill 1 */}
            <div className="px-4 py-10 lg:px-8 lg:py-14 w-full flex justify-center bg-[var(--color-secondary-elevated)]">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                        <div>
                            <img className="rounded-xl" src="skills/skill1.png" alt="Logo Design" />
                        </div>


                        <div className="mt-5 sm:mt-10 lg:mt-0">
                            <div className="space-y-6 sm:space-y-8">
                            
                                <div className="space-y-2 md:space-y-4">
                                    <h2 className="font-bold text-3xl lg:text-4xl">
                                        Logo Design
                                    </h2>

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
            </div>

            {/* Skill 2 */}
            <div className="px-4 py-10 lg:px-8 lg:py-14 w-full flex justify-center">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                        <div className="mt-5 sm:mt-10 lg:mt-0">
                            <div className="space-y-6 sm:space-y-8">    
                                <div className="space-y-2 md:space-y-4">
                                    <h2 className="font-bold text-3xl lg:text-4xl">
                                        Brand Identity
                                    </h2>

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

                        <div>
                            <img className="rounded-xl" src="skills/skill2.png" alt="Logo Design" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Works */}
            <div className="px-4 py-10 lg:px-8 lg:py-14 w-full flex justify-center bg-[var(--color-secondary-elevated)]">
                <div className="w-7xl">
                    <div className="mx-auto mb-8">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">My Works</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                            key={index}
                            href={project.link}
                            className="group relative block h-[400px] w-full rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-white/80 bg-opacity-90 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"> 
                                    <div className="flex justify-end">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0-10h10v10" />
                                        </svg>
                                    </div>

                                    {/* Title & Description */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                                        <p className="mt-1 text-sm text-gray-600">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}
