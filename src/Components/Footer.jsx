import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 py-10 px-6 md:px-20 mt-20">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Abhay Kumar</h2>
          <p className="text-gray-400 text-sm mt-1">
            Building modern web experiences 🚀
          </p>
        </div>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Abhay750"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-kumar-a6651337a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:abhaykumarvaidh@gmail.com"
            className="hover:text-red-400 transition duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>

        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Abhay Kumar. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;