import React from "react";

const Home = () => {
  return (
    <div className="home w-full min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
      
      <div className="max-w-5xl w-full flex flex-col gap-8 sm:gap-10">
        
        {/* Intro Section */}
        <div className="flex flex-col gap-3 sm:gap-4">
          
          <h2 className="text-gray-400 text-sm sm:text-base md:text-lg tracking-wide">
            Hi, I'm
          </h2>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            Abhay Kumar
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-full sm:max-w-xl leading-relaxed">
            Passionate about building beautiful, performant web applications 
            and exploring the frontiers of artificial intelligence.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          
          <a
            href="/myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 flex items-center justify-center gap-2 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
          >
            ↓ Resume
          </a>

          <a
            href="#form"
            className="w-full sm:w-auto text-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300"
          >
            Contact Me
          </a>

        </div>

      </div>
    </div>
  );
};

export default Home;