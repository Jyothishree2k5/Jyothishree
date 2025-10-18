// src/components/Navigation.jsx
import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 md:p-6 bg-[#C9ADA7] mx-auto z-50">
      <div className="flex justify-center md:justify-between items-center gap-2 md:gap-4 lg:gap-20 flex-wrap">
       
        <Button 
          variant="outline" 
          className="text-[#F2E9E4] bg-[#9A8C98] hover:bg-[#9A8C98] hover:text-[#F2E9E4] hover:shadow-xl
    transition-all duration-300 ease-in-out flex-1 min-w-[80px] border-none text-sm md:text-base px-2 md:px-4"
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </Button>
        <Button 
          variant="outline" 
          className="text-[#F2E9E4] bg-[#9A8C98] hover:bg-[#9A8C98] hover:text-[#F2E9E4] hover:shadow-xl
    transition-all duration-300 ease-in-out flex-1 min-w-[80px] border-none text-sm md:text-base px-2 md:px-4"
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </Button>
        <Button 
          variant="outline" 
          className="text-[#F2E9E4] bg-[#9A8C98] hover:bg-[#9A8C98] hover:text-[#F2E9E4] hover:shadow-xl
    transition-all duration-300 ease-in-out flex-1 min-w-[80px] border-none text-sm md:text-base px-2 md:px-4"
          onClick={() => scrollToSection('experience')}
        >
          Experience
        </Button>
        
        <Button 
          variant="outline" 
          className="text-[#F2E9E4] bg-[#9A8C98] hover:bg-[#9A8C98] hover:text-[#F2E9E4] hover:shadow-xl
    transition-all duration-300 ease-in-out flex-1 min-w-[80px] border-none text-sm md:text-base px-2 md:px-4"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
