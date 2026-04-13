import { CodeXml, GraduationCap, Heart, Rocket, User } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <>
    <div className="about h-screen w-screen flex flex-col px-40 py-20" id='about'>
        <div>
            <h1 className="text-5xl text-blue-600 ">About Me</h1>
            <p className='text-gray-600'>Get to know me better</p>
        </div>
        <div className="mainabout grid grid-cols-2 text-gray-600 mt-20 gap-20 flex-1">
            <div className="box1 bg-gray-600/20 blur-5xl rounded-2xl h-80 p-10 border border-gray-700 flex flex-col  gap-5">
                <p>I'm Abhay Kumar, a passionate full-stack developer and AI enthusiast with a knack for building elegant, high-performance applications. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
                <p>When I'm not coding, you'll find me exploring new AI research papers, contributing to open-source projects, or experimenting with creative coding and generative art.</p>
            </div>
            <div className="box2  grid grid-cols-2 grid-rows-2 gap-5 rounded-2xl h-80 ">
                <div className="box11 bg-gray-600/20 rounded-2xl border border-gray-700 blur-5xl flex justify-center items-center gap-2 flex-col hover:shadow-inner shadow-white/10 hover:transform hover:scale-105 duration-300">
                    <div><CodeXml className='text-blue-500 w-7 h-7' /></div>
                    <p className=''>3+ Years Coding</p>
                    <p className='text-white text-[12px]'> Building web & AI apps</p>

                </div>
                <div className="box12 bg-gray-600/20 rounded-2xl border border-gray-700 blur-5xl flex justify-center items-center gap-2 flex-col hover:shadow-inner shadow-white/10 hover:transform hover:scale-105 duration-300">
                    <div><GraduationCap className='text-blue-500 w-7 h-7' /></div>
                    <p>CS Student</p>
                    <p className='text-white text-[12px] align-center'>Pursuing Computer Science</p>
                </div>
                <div className="box13 bg-gray-600/20 rounded-2xl border border-gray-700 blur-5xl  flex justify-center items-center gap-2 flex-col hover:shadow-inner shadow-white/10 hover:transform hover:scale-105 duration-300">
                    <Rocket className='text-blue-500 w-7 h-7' />
                    <p>10+ Projects</p>
                    <p className='text-white text-[12px]'>Completed Successfully</p>
                </div>
                <div className="box14 bg-gray-600/20 rounded-2xl border border-gray-700 blur-5xl  flex justify-center items-center gap-2 flex-col hover:shadow-inner shadow-white/10 hover:transform hover:scale-105 duration-300">
                    <Heart className='text-blue-500 w-7 h-7' />
                    <p>Open Source</p>
                    <p className='text-white text-[12px]'>Active Contributor</p>
                </div>
            </div>
        </div>
        

    </div>
    </>
  )
}

export default About