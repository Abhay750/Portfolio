import React from "react";

const Design = () => {
  const designSkills = [
    { name: "Figma", level: 80 },
    { name: "UI/UX Design", level: 70 },
    { name: "Canva", level: 65 },
    { name: "Git", level: 75 },
  ];

  return (
    <div className="design w-full h-auto p-4 sm:p-5 md:p-6 border border-gray-700 rounded-xl flex flex-col bg-gray-800/40 backdrop-blur-md shadow-lg">
      
      {/* Title */}
      <h1 className="text-white text-lg sm:text-xl md:text-2xl mb-4">
        Design & Tools
      </h1>

      {/* Skills */}
      <div className="w-full space-y-4">
        {designSkills.map((skill, index) => (
          <div key={index}>
            
            {/* Skill Name + % */}
            <div className="flex justify-between items-center text-white mb-1">
              <span className="text-xs sm:text-sm text-gray-400">
                {skill.name}
              </span>
              <span className="text-xs sm:text-sm">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="bg-black/50 w-full rounded-full h-2 sm:h-2.5 overflow-hidden">
              <div
                className="bg-yellow-500 h-full rounded-full transition-all duration-700 ease-in-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Design;