import React from 'react'
import Frontend from '../Components/Frontend'
import Backend from '../Components/Backend'
import AI_Engineering from '../Components/AI_Engineering'
import Design from '../Components/Design'

const Skill = () => {
  return (
    <>
        <div className="skillsection px-40 py-20 h-screen w-screen flex flex-col" id='skills'>
            <h1 className="text-5xl text-blue-600">Skills</h1>
            <p className='text-gray-500'>Technologies I work with</p>
            <div className="skillbox grid grid-cols-2 grid-rows-2 gap-7 mt-10 rounded-2xl p-7">
                <Frontend />
                <Backend />
                <AI_Engineering />
                <Design />

            </div>
        </div>
        
    </>
  )
}

export default Skill