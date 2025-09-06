import React from "react";
import Logo from "./Logo";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 w-full z-40 bg[rgba(10,10,10,0.8)]
    backdrop-blur-lg px-1 border-b border-white/10 shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
          <Logo />
          <div className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono">
            <MdMenu/>
          </div>
          <div className="flex md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-300 text-lg hover:scale-120 hover:text-green-500 transition-all"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 text-lg hover:scale-120 hover:text-green-500 transition-all"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 text-lg hover:scale-120 hover:text-green-500 transition-all"
              >
                Projects
              </a>
              <a
                href="#contacts"
                className="text-gray-300 text-lg hover:scale-120 hover:text-green-500  transition-all"
              >
                Contacts
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
