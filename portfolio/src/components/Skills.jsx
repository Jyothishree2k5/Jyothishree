// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000"},
    {icon:"https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
    {icon: "https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=lTKW3iI3wIT0&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000"},
    {icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000"},

  ];

  const SkillIcon = ({ icon }) => {
    return (
      <motion.div
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
        className="p-2 md:p-4"
      >
        <img 
          src={icon} 
          alt="skill"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
      </motion.div>
    );
  };

  return (
    <section id="skills" className="bg-[#484A63] py-8 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-mono text-[#F2E9E4] text-center mb-8 md:mb-16"
        >
          SKILLS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#C9ADA7] p-4 md:p-8 rounded-lg shadow-xl"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-8 justify-items-center">
            {skillsData.map((skill, index) => (
              <SkillIcon key={index} icon={skill.icon} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
