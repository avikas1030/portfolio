import React from "react";
import "./footer.css";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub, FaCode, FaTerminal } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#282828] text-gray-300 text-sm py-6 mt-10">
      <div className="flex gap-[100px] px-6">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <a
            href="mailto:vikashbbn82@gmail.com"
            className="hover:text-white cursor-pointer flex items-center gap-2"
          >
            <MdEmail size={18} /> vikashbbn82@gmail.com
          </a>
          <a
            href="tel:+917037575583"
            className="hover:text-white cursor-pointer flex items-center gap-2"
          >
            <MdPhone size={18} /> 7037575583
          </a>
        </div>

        {/* Professional Links */}
        <div className="flex flex-col gap-2">
          <a
            href="https://www.linkedin.com/in/vikaschoudhary2001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer flex items-center gap-2"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/avikas1030"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer flex items-center gap-2"
          >
            <FaGithub size={18} /> GitHub
          </a>
        </div>

        {/* Coding Profiles */}
        <div className="flex flex-col gap-2">
          <a
            href="https://codeforces.com/profile/Avikas1998"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer flex items-center gap-2"
          >
            <FaTerminal size={18} /> Codeforces
          </a>
          <a
            href="https://leetcode.com/u/Avikas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer flex items-center gap-2"
          >
            <SiLeetcode size={18} /> LeetCode
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-xs mt-6">
        © {new Date().getFullYear()} Vikas Choudhary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
