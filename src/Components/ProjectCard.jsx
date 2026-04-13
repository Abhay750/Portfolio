import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, tags, link, gitlink }) => {
  return (
    <div className="projectcard relative w-full max-w-md bg-[#2a2f35] text-white p-6 rounded-3xl border border-gray-600 overflow-hidden shadow-lg hover:transform hover:scale-105 duration-300">
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#7c9c97] opacity-30 rounded-full translate-x-10 -translate-y-10"></div>
      <h2 className="text-3xl text-[#b6e2db] mb-4">
        {title}
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex gap-3 flex-wrap mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-[#5e7471] text-sm rounded-full text-[#d1f3ec]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full h-[2px] bg-black mb-4"></div>

      <div className="flex items-center justify-between">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b6e2db] flex items-center gap-2 hover:underline"
        >
          View Live →
        </a>

        <a href={gitlink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-[#b6e2db] cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;