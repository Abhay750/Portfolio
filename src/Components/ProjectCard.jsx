import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, tags, link, gitlink }) => {
  return (
    <div className="projectcard relative w-full max-w-sm sm:max-w-md bg-[#2a2f35] text-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-gray-600 overflow-hidden shadow-lg hover:scale-[1.03] transition-all duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-28 sm:w-40 h-28 sm:h-40 bg-[#7c9c97] opacity-20 sm:opacity-30 rounded-full translate-x-8 sm:translate-x-10 -translate-y-8 sm:-translate-y-10 blur-2xl"></div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl text-[#b6e2db] mb-3 sm:mb-4 font-semibold">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
        {description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 sm:gap-3 flex-wrap mb-4 sm:mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#5e7471] text-xs sm:text-sm rounded-full text-[#d1f3ec]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700 mb-3 sm:mb-4"></div>

      {/* Links */}
      <div className="flex items-center justify-between">
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b6e2db] text-sm sm:text-base flex items-center gap-2 hover:underline"
        >
          View Live →
        </a>

        <a href={gitlink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl sm:text-2xl text-[#b6e2db] cursor-pointer hover:scale-110 transition-transform duration-300" />
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;