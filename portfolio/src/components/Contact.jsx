import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 font-mono bg-[#484A63]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-mono text-[#F2E9E4] text-center mb-16">CONTACT</h2>

        <div className="max-w-2xl mx-auto"> {/* Centered container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#C9ADA7]/80 backdrop-blur-lg rounded-lg p-8 shadow-lg border border-[#F2E9E4]/20"
          >
            <h3 className="text-2xl font-semibold text-[#F2E9E4]  mb-8">Let's Connect
            </h3>
           
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#484A63] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F2E9E4]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="text-[#F2E9E4] ">jyothishreerajkumar@gmail.com</p>
              </div>

              

              {/* Social Links */}
              <div className="pt-6 mt-8 border-t border-[#22223b]/10">
                <h3 className="text-[#F2E9E4] text-2xl  font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/jyothishree-rajkumar-055022243" 
                    className="w-10 h-10 bg-[#484A63] rounded-full flex items-center justify-center hover:bg-[#22223b]/80 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F2E9E4]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/Jyothishree2k5" 
                    className="w-10 h-10 bg-[#484A63] rounded-full flex items-center justify-center hover:bg-[#22223b]/80 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F2E9E4]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a 
                    href="https://x.com/Jyothishree2k58" 
                    className="w-10 h-10 bg-[#484A63] rounded-full flex items-center justify-center hover:bg-[#22223b]/80 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F2E9E4]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://jyothishree.hashnode.dev/" 
                    className="w-10 h-10 bg-[#484A63] rounded-full flex items-center justify-center hover:bg-[#22223b]/80 transition-colors duration-300"
                    aria-label="Hashnode Blog"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-[#F2E9E4]" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/>
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
