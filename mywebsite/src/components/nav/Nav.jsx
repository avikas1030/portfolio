import React from 'react'
import "./nav.css"
import profile from "../../assets/profile.jpeg";
const Nav = () => {
  return (
    <div>
  <nav id="nav" className="fixed top-0 left-0 w-full z-50 h-[50px] bg-[#282828] flex items-center text-white shadow-md px-[100px]">
    <div className="flex items-center gap-[100px]">
      <img src={profile} alt="Profile" className="h-[45px] rounded-full" />
      <ul className="flex items-center gap-[20px]">
        <li className="text-gray-300 hover:text-white cursor-pointer text-sm">Home</li>
        <li className="text-gray-300 hover:text-white cursor-pointer text-sm">Projects</li>
        <li className="text-gray-300 hover:text-white cursor-pointer text-sm">My Learnings</li>
        <li className="text-gray-300 hover:text-white cursor-pointer text-sm">Coding Profiles</li>
      </ul>
    </div>
  </nav>
</div>

  )
}

export default Nav
