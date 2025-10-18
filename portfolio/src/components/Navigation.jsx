// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY;
      
      // Check for home section first (top of page)
      if (scrollPosition < 400) {
        setActiveSection('home');
        return;
      }
      
      // Check other sections
      const sections = ['skills', 'projects', 'experience', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 300;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    handleScroll(); // Call immediately to set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-mono ${
        isScrolled 
          ? 'bg-[#C9ADA7]/90 backdrop-blur-md shadow-lg border-b border-[#F2E9E4]/20' 
          : 'bg-[#C9ADA7]'
      }`}
    >
      <div className="px-4 md:px-6 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Button
                  variant="outline"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 md:px-4 md:py-2 font-mono text-xs md:text-sm
                    transition-all duration-300 border-none hover:scale-105
                    ${activeSection === item.id 
                      ? 'bg-[#9A8C98] text-[#F2E9E4] shadow-lg transform scale-105' 
                      : 'bg-[#9A8C98] text-[#F2E9E4] hover:bg-[#9A8C98]/80 hover:shadow-md'
                    }`}
                >
                  {item.label}
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#F2E9E4] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtle bottom border animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F2E9E4]/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.nav>
  );
};

export default Navigation;