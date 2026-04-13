import React from 'react'

const Backend = () => {
    const backendSkills = [
        { name: "Node.js", level: 10 },
        { name: "Express.js", level: 15 },
        { name: "MongoDB", level: 10 },
        { name: "Python", level: 65 },
    ];
  return (
    <>
    <div className="backend w-full h-80 p-5 border border-gray-700 rounded-lg flex flex-col bg-gray-600/30 backdrop-blur-sm">
        <h1 className="text-white text-2xl mb-4">
            Backend Development
        </h1>
        <div className="space-y-4 w-full">
            {backendSkills.map((skill,index)=>{
                return(
                    <div className="skil" key={index}>
                        <div className="flex justify-between text-white mb-1">
                            <span id="name" className="text-sm text-gray-500">{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="bg-black/50 w-full rounded-full h-2 overflow-hidden">
                            <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }} 
                            ></div>
                        </div>

                    </div>
                )
            })}

        </div>
    </div>
    </>
  )
}

export default Backend