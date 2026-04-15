import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 py-8 sm:py-10 px-4 sm:px-6 md:px-12 lg:px-20 mt-16 sm:mt-20 border-t border-gray-800">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl text-white">
            Abhay Kumar
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Building modern web experiences 🚀
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 sm:gap-6 text-xl sm:text-2xl">
          
          <a
            href="https://github.com/Abhay750"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abhay-kumar-a6651337a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:abhaykumarvaidh@gmail.com"
            className="hover:text-red-400 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaEnvelope />
          </a>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Abhay Kumar. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;