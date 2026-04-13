import React from 'react'
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  const projects = [
  {
  title: "OPPO Website Clone",
  description: "Developed a responsive and visually accurate clone of the OPPO product landing page, focusing on modern UI design, layout precision, and smooth user experience. Implemented structured sections, product showcases, and clean styling to replicate a real-world brand website.",
  tags: ["HTML5", "CSS3", "JavaScript"],
  link: "https://abhay750.github.io/OPPO_cloning/",
  gitlink: "https://github.com/abhay750/OPPO_cloning"
},
{
  title: "Adventure Sports Website (Responsive UI)",
  description: "Built a modern and responsive adventure sports website featuring immersive visuals, structured layouts, and engaging UI design. Focused on delivering a smooth user experience inspired by real-world travel and adventure platforms.",
  tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
  link: "https://abhay750.github.io/Adventure-Sports/",
  gitlink: "https://github.com/abhay750/Adventure-Sports"
},
  {
  title: "AI Chatbot Web App",
  description: "Developed an AI-powered chatbot web application using React, integrating Hugging Face APIs to generate intelligent responses. Built a clean and responsive chat interface with Ant Design, focusing on real-time interaction, smooth UX, and modern UI components.",
  tags: ["React", "JavaScript", "Hugging Face API", "AntiGravity", "AI", "Responsive"],
  link: "https://chatbot-ai-use-silk.vercel.app/",
  gitlink: "https://github.com/Abhay750/chatbot_ai_use.git"
}
];
  return (
    <>
      <div className="project px-40 py-20 h-screen w-screen flex flex-col">
            <h1 className="text-5xl text-blue-600">Projects</h1>
            <p className='text-gray-500'>What I've built</p>
            <div className="skillbox grid grid-cols-3 gap-7 mt-10 rounded-2xl p-7">
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
            <div className="btn w-screen flex justify-center mt-10">
              <a href="https://github.com/Abhay750" target="_blank" rel="noopener noreferrer">
              <button className=" ml-[-280px] px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                View All Projects
              </button>
              </a>
            </div>
        </div>
    </>
  )
}

export default Projects