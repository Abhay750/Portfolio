import React from "react";

const Frontend = () => {
  const reactSkills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 75 },
  ];

  return (
    <div className="frontend w-full p-4 sm:p-5 border border-gray-700 rounded-lg flex flex-col bg-gray-600/30 backdrop-blur-sm">

      <h1 className="text-white text-xl sm:text-2xl mb-3 sm:mb-4">
        Frontend Development
      </h1>

      <div className="space-y-3 sm:space-y-4 w-full">
        {reactSkills.map((skill, index) => (
          <div key={index}>

            <div className="flex justify-between text-white mb-1">
              <span className="text-xs sm:text-sm text-gray-400">{skill.name}</span>
              <span className="text-xs sm:text-sm">{skill.level}%</span>
            </div>

            <div className="bg-black/50 w-full rounded-full h-1.5 sm:h-2 overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Frontend;