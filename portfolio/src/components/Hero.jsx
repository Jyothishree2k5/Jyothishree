// src/components/Hero.jsx
import React ,{useState} from 'react';
import Navigation from './Navigation';
import { TypeAnimation } from 'react-type-animation';
import {motion , AnimatePresence} from 'framer-motion';

import profileImage from '/jyothishree-profile.jpeg';
import myCV from '../assets/Resume.pdf'

const Hero = () => {

  const handleClick = () => {
    // Create a link element
    e.preventDefault();
    const link = document.createElement('a');
    link.href = myCV;
    link.download = 'JyothishreeRajkumar_CV.pdf';  // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-[#484A63] min-h-screen font-sans pt-20">
      

     
      
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Content Container */}
      <div className="container mx-auto px-4 pt-8 md:pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Side: Content and Social Icons */}
          <div className="flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Text Content */}
            <div className="space-y-4">
                <TypeAnimation
                      sequence={[
                        'Hi, I am JYOTHISHREE RAJKUMAR',
                        1000,
                        '',
                        500,
                        'Hi, I am JYOTHISHREE RAJKUMAR',
                        1000,

                      ]}
                      wrapper="h1"
                      className="text-2xl md:text-3xl lg:text-4xl font-mono mb-6 lg:mb-10 mt-6 lg:mt-10 text-[#F2E9E4]"
                      speed={50}
                      repeat={Infinity}
                    />
                  <h2 className="text-lg md:text-xl lg:text-2xl font-mono text-[#F2E9E4] pb-6 lg:pb-10">
                    BACKEND DEVELOPER
                    </h2>
              <p className="max-w-xl text-[#F2E9E4] text-sm md:text-base lg:text-[18px] font-mono leading-relaxed">
              I  build web applications with  MERN stack, solve DSA in Python ,and share my learnings through blogs.     
              I occasionally dive into open-source contributions and constantly explore new technologies to stay ahead. And when the tech world gets overwhelming, you'll find me escaping into a book—because staying sane is just as important as staying updated.
              </p>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start gap-4">
              {/* Download Button */}
              <motion.a
                href={myCV}
                onClick={handleClick}
               download="JyothishreeRajkumar_CV.pdf"
                className="inline-flex items-center px-4 py-2 md:px-6 md:py-3
                  bg-[#C9ADA7] text-[#F2E9E4] rounded-lg font-mono
                  transition-all duration-300 ease-in-out
                  hover:bg-[#9A8C98] hover:scale-105 hover:shadow-lg
                  active:scale-95 text-sm md:text-base"
              >
                <svg 
                  className="w-4 h-4 md:w-5 md:h-5 mr-2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </motion.a>
              
              {/* LeetCode Profile */}
              <a href="https://leetcode.com/u/JyothishreeR/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 md:px-6 md:py-3
                  bg-[#C9ADA7] text-[#F2E9E4] rounded-lg font-mono
                  transition-all duration-300 ease-in-out
                  hover:bg-[#9A8C98] hover:scale-105 hover:shadow-lg
                  active:scale-95 text-sm md:text-base">
                <img 
                  src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000" 
                  alt="Leetcode" 
                  className="w-4 h-4 md:w-5 md:h-5 mr-2"
                />
                LeetCode
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer glow container */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#C9ADA7] to-[#9A8C98] blur-xl opacity-70 animate-pulse"></div>
              
              {/* Image container with border effects */}
              <div className="relative w-full h-full rounded-lg overflow-hidden
                              border-4 border-[#C9ADA7]
                              shadow-[0_0_15px_rgba(201,173,167,0.5)]
                              transform transition-all duration-300 hover:scale-102">
                <img 
                  src={profileImage} 
                  alt="Your Name" 
                  className="w-full h-full object-cover  rounded-lg
                            transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;