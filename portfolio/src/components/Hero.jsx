// src/components/Hero.jsx
import React ,{useState} from 'react';
import Navigation from './Navigation';
import { TypeAnimation } from 'react-type-animation';
import {motion , AnimatePresence} from 'framer-motion';
import Confetti from 'react-confetti';
import profileImage from '../assets/jyothishree-profile.jpeg';

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default download behavior
    setShowConfetti(true);
    setShowMessage(true);
    
    // Hide confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  return (
    <div className="bg-[#484A63] min-h-screen font-sans">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      )}

     
      
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
                    MERN STACK DEVELOPER
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
              <AnimatePresence>
                {showMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-16 left-0 z-50"
                  >
                    <div className="bg-[#C9ADA7] text-[#F2E9E4] ml-20 px-4 py-2 rounded-lg shadow-lg">
                      <p className="font-mono text-sm whitespace-nowrap">Oops! That's confidential! ,🤫. You got click baited!!</p>
                      {/* Triangle pointer */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
                        border-l-8 border-r-8 border-t-8 
                        border-l-transparent border-r-transparent border-t-[#C9ADA7]" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Download Button */}
              <motion.a
                href="#"
                onClick={handleClick}
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
          <div className="w-96 h-96 bg-[#6A6C8A] rounded-lg">
            {/* Your image will go here */}
            <img src={profileImage} alt="Your Name" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
