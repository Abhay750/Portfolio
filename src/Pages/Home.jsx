import React from "react";

const Home = () => {
  return (
    <div className="home w-screen min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-20">
      
      <div className="max-w-5xl w-full flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-400 text-lg tracking-wide">
            Hi, I'm
          </h1>

          <h1 className="text-6xl md:text-7xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Abhay Kumar
          </h1>

          <p className="para text-gray-400 max-w-xl leading-relaxed">
            Passionate about building beautiful, performant web applications 
            and exploring the frontiers of artificial intelligence.
          </p>
        </div>

        <div className="flex gap-5 flex-wrap">
          
          <a
                href="/myresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 flex items-center gap-2 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
        ↓ Resume
        </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300"
          >
            Contact Me
          </a>

        </div>

      </div>
    </div>
  );
};

export default Home;