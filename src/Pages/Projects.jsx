import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "MovieSearch",
      description:
        "Built a responsive movie discovery web application that allows users to browse trending films, view ratings, and explore detailed movie information using real-time API integration. Designed with a modern UI, smooth user experience, and dynamic content rendering.",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "TMDB API"],
      link: "https://movie-search-delta-rosy.vercel.app/",
      gitlink: "https://github.com/Abhay750/MovieSearch.git",
    },
    {
      title: "Adventure Sports Website",
      description:
        "Built a modern and responsive adventure sports website featuring immersive visuals and structured layouts, inspired by real-world travel platforms.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "UI/UX"],
      link: "https://abhay750.github.io/Adventure-Sports/",
      gitlink: "https://github.com/abhay750/Adventure-Sports",
    },
    {
      title: "AI Chatbot Web App",
      description:
        "Developed an AI-powered chatbot using React and Hugging Face APIs with a clean UI using Ant Design, enabling real-time intelligent responses.",
      tags: ["React", "JavaScript", "Hugging Face", "Ant Design", "AI"],
      link: "https://chatbot-ai-use-silk.vercel.app/",
      gitlink: "https://github.com/Abhay750/chatbot_ai_use",
    },
  ];

  return (
    <div className="w-full min-h-screen px-6 md:px-20 py-20 flex flex-col mt-30 overflow-x-hidden">
      
      <h1 className="text-4xl md:text-5xl text-blue-500">
        Projects
      </h1>
      <p className="text-gray-400 mt-2">What I've built</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            gitlink={project.gitlink}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/Abhay750"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 hover:scale-105">
            View All Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
