import React from 'react'
import Skill from '../Pages/Skill';

const AI_Engineering = () => {
    const aiSkills = [
        { name: "RAG System", level: 10 },
        { name: "Machine Learning", level: 75 },
        {name: "SaaS", level: 60}
    ];
  return (
    <>
    <div className="frontend w-full h-80 p-5 border border-gray-700 rounded-lg flex flex-col bg-gray-600/30 backdrop-blur-sm">
        <h1 className="text-white text-2xl mb-4">
            AI Engineering
        </h1>
        <div className="space-y-4 w-full">
            {aiSkills.map((Skill,index)=>{
                return(
                    <div className="skil" key={index}>
                        <div className="flex justify-between text-white mb-1">
                            <span id="name" className="text-sm text-gray-500">{Skill.name}</span>
                            <span>{Skill.level}%</span>
                        </div>
                        <div className="bg-black/50 w-full rounded-full h-2 overflow-hidden">
                            <div
                                className="bg-red-300 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${Skill.level}%` }} 
                            ></div>
                        </div>

                    </div>
                )
            })}

        </div>
        <div className="learning">
            <h2 className='text-white text-lg mt-5'>Currently Learning:</h2>
            <ul className='list-disc list-inside text-gray-400 mt-2'>
                <li>RAG System</li>
                <li>Advanced Machine Learning</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default AI_Engineering