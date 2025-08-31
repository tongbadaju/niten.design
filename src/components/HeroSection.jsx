import React from 'react';

const HeroSection = () => {
    return (
        <div className="py-10 md:py-30 flex items-center justify-center px-6 w-full">
            <div className="grid md:grid-cols-2 gap-10 md:gap-60 items-center justify-between">
                {/* Left Content */}
                <div className="space-y-6 md:space-y-10" data-aos="fade-right">
                    <div className="space-y-6">
                        <p className="uppercase text-[10px] md:text-sm font-semibold tracking-widest">Graphic Designer, Traveller</p>
                        <h1 className="text-4xl md:text-6xl font-semibold">
                            <span>I design digital <br/> crafts for clients.</span>
                        </h1>
                    </div>  
                
                    <div className="flex items-center gap-2">
                        <div className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] strong">2+</div>
                        <div className="text-xs md:text-sm font-medium">Years of <br/>Experience</div>
                    </div>
                    
                    <a
                    href="https://docs.google.com/document/d/1WDjvxwCQZUkV4XAMGuItQ5oH7XLAqkXg/edit?usp=sharing&ouid=101377916888086743853&rtpof=true&sd=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 md:px-6 md:py-3.5 inline-flex bg-[var(--color-primary)] text-[10px] md:text-xs tracking-widest font-medium hover:-translate-y-2 transition-200 transition-all duration-400 items-center rounded-full cursor-pointer uppercase"
                    >
                    Resume
                    <span className="ml-2">
                        <svg
                        viewBox="0 0 24 24"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="arrowRightTopIconTitle"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        fill="none"
                        color="#000000"
                        className="w-5 h-5"
                        >
                            <title id="arrowRightTopIconTitle">Arrow Right Top</title>
                            <path d="M19 13V5h-8"></path>
                            <path strokeLinecap="round" d="M19 5l-1 1"></path>
                            <path d="M18 6L5 19"></path>
                        </svg>
                    </span>
                    </a>

                </div>


                {/* Placeholder for image */}
                <div data-aos="fade-left">   
                    <img></img>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;