import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="navbar fixed w-screen flex justify-between items-center px-10 py-5 border-2 border-gray-700">
            <h1 className='text-2xl'>Portfolio</h1>
            <div className="navlinks w-100 flex justify-end gap-10">
                <a href="#about" className='hover:text-blue-500'>About</a>
                <a href="#projects" className='hover:text-blue-500'>Projects</a>
                <a href="#contact" className='hover:text-blue-500'>Contact</a>
            </div>
        </div>
    </>
  )
}

export default Navbar