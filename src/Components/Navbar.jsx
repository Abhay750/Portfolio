import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-3 left-0 w-full z-50">
      
      <div className="max-w-[80%] mx-auto flex items-center rounded-full justify-between border-b backdrop-blur-md border-gray-800 shadow-lg px-6 py-3">
        
        {/* Logo */}
        <div className="text-2xl text-white cursor-pointer">
          <a href="#intro">PortFolio</a>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <a href="#home" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#skills" className="relative group">
            Skill
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#form" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar