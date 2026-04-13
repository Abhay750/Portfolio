import React from 'react'

const Design = () => {
    const designSkills = [
        { name: "Figma", level: 80 },
        { name: "UI/UX Design", level: 70 },
        { name: "Canva", level: 65 },
        { name: "Git", level: 75 },
    ];
  return (
    <>
        <div className="design w-full h-80 p-5 border border-gray-700 rounded-lg flex flex-col bg-gray-600/30 backdrop-blur-sm">
            <h1 className="text-white text-2xl mb-4">
                Design
            </h1>
            <div className='w-full space-y-4'>
                {designSkills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-white mb-1">
                            <span id="name" className="text-sm text-gray-500">{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="bg-black/50 w-full rounded-full h-2 overflow-hidden">
                            <div
                                className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }} 
                            ></div>
                        </div>
                    </div>
                ))} 

            </div>
            
            
        </div>
    </>
  )
}

export default Design