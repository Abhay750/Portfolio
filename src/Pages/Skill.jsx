import React from 'react'
import Frontend from '../Components/Frontend'
import Backend from '../Components/Backend'
import AI_Engineering from '../Components/AI_Engineering'
import Design from '../Components/Design'

const Skill = () => {
  return (
    <div
      className="skillsection px-6 sm:px-12 md:px-20 lg:px-40 py-12 sm:py-16 md:py-20 min-h-screen w-full flex flex-col"
      id="skills"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-600">Skills</h1>
      <p className="text-gray-500 mt-1 text-sm sm:text-base">Technologies I work with</p>

      <div className="skillbox grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7 mt-8 sm:mt-10 rounded-2xl p-4 sm:p-6 md:p-7">
        <Frontend />
        <Backend />
        <AI_Engineering />
        <Design />
      </div>
    </div>
  )
}

export default Skill