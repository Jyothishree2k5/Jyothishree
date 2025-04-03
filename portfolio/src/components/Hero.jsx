// src/components/Hero.jsx
import React ,{useState} from 'react';
import Navigation from './Navigation';
import { TypeAnimation } from 'react-type-animation';
import {motion , AnimatePresence} from 'framer-motion';

import profileImage from '../assets/jyothishree-profile.jpeg';
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
    <div className="bg-[#484A63] min-h-screen font-sans">
      

     
      
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Content Container */}
      <div className="container mx-auto px-4 pt-16">
        <div className="flex flex-row items-center justify-between">
          {/* Left Side: Content and Social Icons */}
          <div className="flex flex-col space-y-8">
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
                      className="text-4xl font-mono mb-10 mt-10 text-[#F2E9E4]"
                      speed={50}
                      repeat={Infinity}
                    />
                  <h2 className="text-2xl pl-28 font-mono text-[#F2E9E4] pb-10">
                    FULL STACK DEVELOPER
                    </h2>
              <p className="max-w-xl text-[#F2E9E4] text-[18px] font-mono">
              I  build web applications with  MERN stack, solve DSA in Python ,and share my learnings through blogs.     
              I occasionally dive into open-source contributions and constantly explore new technologies to stay ahead. And when the tech world gets overwhelming, you’ll find me escaping into a book—because staying sane is just as important as staying updated.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-8">
              {/* Replace with actual icon components or images */}
              <div className="text-3xl text-[#F2E9E4]"></div>
              <div className="text-3xl text-[#F2E9E4]"></div>
              <div className="text-3xl text-[#F2E9E4]"></div>
            </div>

            <div className="pt-4 pl-36 relative">
              {/* Message Popup */}
              

              {/* Download Button */}
              <motion.a
                href={myCV}
                onClick={handleClick}
               download="JyothishreeRajkumar_CV.pdf"
                className="inline-flex items-center px-6 py-3
                  bg-[#C9ADA7] text-[#F2E9E4] rounded-lg font-mono
                  transition-all duration-300 ease-in-out
                  hover:bg-[#9A8C98] hover:scale-105 hover:shadow-lg
                  active:scale-95"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
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
            </div>
          </div>



          {/* Right Side: Image Placeholder */}
          <div className="flex flex-col items-center"></div>
                    <div className="relative w-96 h-96">
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
                className="w-full h-full object-cover rounded-lg
                          transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className=" pl-28 flex gap-10 mt-6">
            <a href="https://leetcode.com/u/JyothishreeR/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110">
              <img 
                src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000" 
                alt="Leetcode" 
                className="w-10 h-10 hover:opacity-80 p-1 bg-[#C9ADA7] rounded-lg"
              />
            </a>
            <a href="https://www.codechef.com/users/jyothishree" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110">
              <img 
                src="https://img.icons8.com/?size=100&id=vAtJFm3hwtQw&format=png&color=000000" 
                alt="Codechef" 
                className="w-10 h-10 hover:opacity-80 p-1 bg-[#C9ADA7] rounded-lg"
              />
            </a>
            <a href="https://www.geeksforgeeks.org/user/jyothishren8tb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110">
              <img 
                src="https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000" 
                alt="GeeksforGeeks" 
                className="w-10 h-10 hover:opacity-80 p-1 bg-[#C9ADA7] rounded-lg"
              />
            </a>
</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
