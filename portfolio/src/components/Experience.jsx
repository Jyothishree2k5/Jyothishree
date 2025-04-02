import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Jithwa Solutions",
      duration: "Jan 2025  - April 2025",
      description: [
        "Developed website pages using React.js and Tailwind CSS",
        "Developed backend using FastAPI and designed prompts for AI models",
        "Tested prompt effectiveness and contributed ideas for product design."
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-16 font-mono bg-[#484A63] relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-mono text-[#F2E9E4] text-center mb-16">EXPERIENCE</h2>
        
        <div className="relative">
          {/* Curved road-like connecting path */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              className="absolute w-full h-full"
              preserveAspectRatio="none"
              fill="none"
              viewBox="0 0 100 100"
            >
              {/* Main curved road */}
              <path
                d="M50,0 C70,25 25,75 50,100"
                className="stroke-[#F2E9E4]/20"
                strokeWidth="12"
                strokeLinecap="round"
              />
              
              {/* Center line */}
              <path
                d="M50,0 C70,25 25,75 50,100"
                className="stroke-[#F2E9E4] dash-animation"
                strokeWidth="1"
                strokeDasharray="2 6"
                strokeLinecap="round"
              />
              
              {/* Edge highlights */}
              <path
                d="M50,0 C70,25 25,75 50,100"
                className="stroke-[#F2E9E4]/40"
                strokeWidth="1"
                strokeLinecap="round"
                transform="translate(-6, 0)"
              />
              <path
                d="M50,0 C70,25 25,75 50,100"
                className="stroke-[#F2E9E4]/40"
                strokeWidth="1"
                strokeLinecap="round"
                transform="translate(6, 0)"
              />
            </svg>
          </div>

          {/* Experience cards */}
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-[calc(50%-3rem)] relative"
                >
                  {/* Connection point */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10"
                       style={{ 
                         [index % 2 === 0 ? 'right' : 'left']: '-3rem',
                       }}>
                    {/* Outer circle */}
                    <div className="w-8 h-8 bg-[#F2E9E4]/20 rounded-full flex items-center justify-center">
                      {/* Inner circle */}
                      <div className="w-4 h-4 bg-[#F2E9E4] rounded-full shadow-lg shadow-[#F2E9E4]/50" />
                    </div>
                    {/* Connecting line to card */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-2 bg-[#F2E9E4]/20
                                   ${index % 2 === 0 ? 'right-8' : 'left-8'}`} />
                  </div>

                  {/* Card content */}
                  <div className="backdrop-blur-lg bg-[#C9ADA7]/80 rounded-lg p-6 
                              border border-[#F2E9E4]/20 hover:border-[#F2E9E4]/40 
                              transition-all duration-300 transform hover:-translate-y-2
                              shadow-md">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#484A63] 
                                    rounded-lg flex items-center justify-center 
                                    text-[#F2E9E4] text-xl font-bold">
                        {index + 1}
                      </div>
                      <div className="ml-8">
                        <h3 className="text-xl font-semibold  mb-2 ml-2">{exp.title}</h3>
                        <p className="text-gray-700">{exp.company}</p>
                        <p className="text-gray-700 text-sm mb-4">{exp.duration}</p>
                        <ul className="mt-4 list-disc list-inside space-y-2">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-gray-700">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
