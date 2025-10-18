import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', updateScrollY);
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Jithwa Solutions",
      duration: "Jan 2025 - April 2025",
      description: [
        "Developed website pages using React.js and Tailwind CSS",
        "Developed backend using FastAPI and designed prompts for AI models",
        "Tested prompt effectiveness and contributed ideas for product design."
      ]
    },
    {
      title: "Software Dev Engineer Intern",
      company: "Amazon",
      duration: "May 2025 - July 2025",
      description: [
        "Developed a Mathematical Expression Solver for Kindle e-readers, enabling real-time recognition and solving of handwritten math expressions using a stylus—enhancing overall user experience.",
        "Worked with a large-scale C++ codebase and implemented key object-oriented design patterns including Factory, Singleton, Observer, and Bridge.",
        "Authored high-level design documents to communicate technical solutions and architecture effectively."
      ]
    },

  ];

  return (
    <section id="experience" className="py-8 md:py-16 font-mono bg-[#484A63] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-[#F2E9E4]/5 rounded-full blur-xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-[#C9ADA7]/10 rounded-full blur-2xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl lg:text-4xl font-mono text-[#F2E9E4] text-center mb-8 md:mb-16"
        >
          EXPERIENCE
        </motion.h2>
        
        <div className="relative flex flex-col items-center space-y-8">
          {/* Connection Lines */}
          {experiences.length > 1 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {experiences.map((_, index) => {
                if (index === experiences.length - 1) return null;
                return (
                  <motion.div
                    key={`connection-${index}`}
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
                    className="relative"
                    style={{ height: '200px', marginTop: index === 0 ? '100px' : '0px' }}
                  >
                    {/* Curved Connection Line */}
                    <svg className="absolute left-1/2 transform -translate-x-1/2" width="4" height="200" viewBox="0 0 4 200">
                      <motion.path
                        d="M2,0 Q10,50 2,100 Q-6,150 2,200"
                        stroke="#F2E9E4"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ delay: 0.7 + index * 0.3, duration: 1.2 }}
                        className="opacity-40"
                      />
                    </svg>
                    
                    {/* Connection Nodes */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.3, type: "spring" }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                               w-3 h-3 bg-[#F2E9E4] rounded-full shadow-lg"
                    />
                    
                    {/* Flowing Particles */}
                    <motion.div
                      animate={{ y: [0, 200] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: 1.5 + index * 0.5,
                        ease: "linear" 
                      }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#C9ADA7] rounded-full opacity-60"
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
          
          {experiences.map((exp, index) => {
            const cardOffset = (scrollY * 0.1) - (index * 50);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5, 
                  scale: 1.02,
                  z: 50
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                style={{
                  transform: `translateY(${cardOffset}px) perspective(1000px)`,
                  zIndex: experiences.length - index
                }}
                className="w-full max-w-2xl relative"
              >
                {/* Card Shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-xl blur-xl transform translate-y-4 translate-x-4" />
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-[#C9ADA7] to-[#9A8C98] rounded-xl p-6 md:p-8 
                              border border-[#F2E9E4]/20 backdrop-blur-sm
                              shadow-2xl transform-gpu">
                  
                  {/* Card Number with Connection Point */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#484A63] rounded-xl 
                                flex items-center justify-center text-[#F2E9E4] text-xl font-bold
                                shadow-lg border-2 border-[#F2E9E4]/30 relative">
                    {index + 1}
                    
                    {/* Connection Point */}
                    {index < experiences.length - 1 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.2 }}
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
                                 w-2 h-2 bg-[#F2E9E4] rounded-full"
                      />
                    )}
                    
                    {/* Top Connection Point */}
                    {index > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.2 }}
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2
                                 w-2 h-2 bg-[#F2E9E4] rounded-full"
                      />
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-[#F2E9E4]/10 rounded-full blur-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#484A63]/20 rounded-full" />
                  
                  {/* Progress Indicator */}
                  <div className="absolute top-2 left-2 flex space-x-1">
                    {Array.from({ length: experiences.length }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: i <= index ? 1 : 0.3 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className={`w-2 h-2 rounded-full ${
                          i <= index ? 'bg-[#484A63]' : 'bg-[#484A63]/30'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 ml-8">
                    <motion.h3 
                      className="text-xl md:text-2xl font-bold text-[#484A63] mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.title}
                    </motion.h3>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <p className="text-[#484A63] font-semibold text-lg">{exp.company}</p>
                      <span className="text-[#484A63]/80 text-sm bg-[#F2E9E4]/20 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-start text-[#484A63] text-sm md:text-base"
                        >
                          <span className="w-2 h-2 bg-[#484A63] rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#F2E9E4]/0 via-[#F2E9E4]/5 to-[#F2E9E4]/0 
                                opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;