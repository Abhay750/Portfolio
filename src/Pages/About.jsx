import { CodeXml, GraduationCap, Heart, Rocket } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div
      className="about w-full min-h-screen flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20"
      id="about"
    >
      {/* Heading */}
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-600">
          About Me
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Get to know me better
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-10 sm:mt-16 flex-1">
        
        {/* Left Box */}
        <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-700 flex flex-col gap-4 sm:gap-5 shadow-lg">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I'm Abhay Kumar, a passionate full-stack developer and AI enthusiast
            with a knack for building elegant, high-performance applications. I
            love turning complex problems into simple, beautiful, and intuitive
            solutions.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            When I'm not coding, you'll find me exploring new AI research papers,
            contributing to open-source projects, or experimenting with creative
            coding and generative art.
          </p>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          
          {/* Card 1 */}
          <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700 flex flex-col items-center justify-center gap-2 p-4 sm:p-5 hover:scale-105 transition-all duration-300 shadow-md">
            <CodeXml className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />
            <p className="text-white text-sm sm:text-base">3+ Years Coding</p>
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              Building web & AI apps
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700 flex flex-col items-center justify-center gap-2 p-4 sm:p-5 hover:scale-105 transition-all duration-300 shadow-md">
            <GraduationCap className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />
            <p className="text-white text-sm sm:text-base">CS Student</p>
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              Pursuing Computer Science
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700 flex flex-col items-center justify-center gap-2 p-4 sm:p-5 hover:scale-105 transition-all duration-300 shadow-md">
            <Rocket className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />
            <p className="text-white text-sm sm:text-base">10+ Projects</p>
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              Completed Successfully
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700 flex flex-col items-center justify-center gap-2 p-4 sm:p-5 hover:scale-105 transition-all duration-300 shadow-md">
            <Heart className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />
            <p className="text-white text-sm sm:text-base">Open Source</p>
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              Active Contributor
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;