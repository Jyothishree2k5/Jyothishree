// src/components/Projects.jsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Travel from '../assets/travel.png';
import Blog from '../assets/blog.png';
import gemini from '../assets/gemini.png';

const Projects = () => {
  const projects = [
    {
      title: "MERN Blog Application",
      description: "A MERN stack blog application enabling users to create, edit, and share posts with ease. Features include a responsive design, real-time updates, and secure user authentication.",
      image: Blog,
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/Jyothishree2k5/Blog-Application"
    },
    {
      title: "AI Travel Planner",
      description: "AI Travel Planner is a smart trip planning tool that provides AI-powered travel recommendations and an interactive destination search, built with React, Firebase, and Google Generative AI. ",
      image: Travel ,
      technologies: ["React", "Firebase", "Tailwind"],
      liveLink: "https://ai-trip-planner-black-ten.vercel.app/",
      githubLink: "https://github.com/Jyothishree2k5/ai-trip-planner"
    },
    {
        title: "Gemini Clone",
        description: "Built the search engine using React.js and useContext Hook.",
        image: gemini,
        technologies: ["React"],
        liveLink: "",
        githubLink: "https://github.com/Jyothishree2k5/Gemini-Clone-Project"

    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#484A63] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-mono text-[#F2E9E4] text-center mb-16"
        >
          PROJECTS
        </motion.h2>

        {/* Projects Carousel */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ 
              x: [-1000, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Double the projects array to create seamless loop */}
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] md:min-w-[400px] bg-[#C9ADA7] rounded-lg shadow-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-[#484A63] text-[#F2E9E4] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#484A63] text-[#F2E9E4] rounded-md hover:bg-opacity-90 transition-all"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#484A63] text-[#F2E9E4] rounded-md hover:bg-opacity-90 transition-all"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
