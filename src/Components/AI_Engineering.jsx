import React from 'react'

const AI_Engineering = () => {
    const aiSkills = [
        { name: "RAG System", level: 10 },
        { name: "Machine Learning", level: 75 },
        { name: "SaaS", level: 60 }
    ];

    return (
        <div className="w-full p-4 sm:p-5 border border-gray-700 rounded-lg flex flex-col bg-gray-600/30 backdrop-blur-sm">

            <h1 className="text-white text-xl sm:text-2xl mb-3 sm:mb-4">
                AI Engineering
            </h1>

            <div className="space-y-3 sm:space-y-4 w-full">
                {aiSkills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-white mb-1">
                            <span className="text-xs sm:text-sm text-gray-400">{skill.name}</span>
                            <span className="text-xs sm:text-sm">{skill.level}%</span>
                        </div>
                        <div className="bg-black/50 w-full rounded-full h-1.5 sm:h-2 overflow-hidden">
                            <div
                                className="bg-red-300 h-full rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 sm:mt-5">
                <h2 className="text-white text-base sm:text-lg mt-4 sm:mt-5">Currently Learning:</h2>
                <ul className="list-disc list-inside text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm space-y-1">
                    <li>RAG System</li>
                    <li>Advanced Machine Learning</li>
                </ul>
            </div>

        </div>
    );
}

export default AI_Engineering