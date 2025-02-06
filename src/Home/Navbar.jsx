import { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skill">Skills</a></li>
      <li><a href="#project">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </>
  );

  return (
    <div className="flex justify-around md:justify-around lg:justify-between  pt-6 px-3 md:px-5 lg:px-0">
      {/* Left Side (Logo) */}
      <div className="navbar-start">
        <a className="text-xl md:text-2xl lg:text-2xl font-bold">
          Sharmin <span className="bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text">Sharker</span>
        </a>
      </div>

      {/* Right Side (Links) - Shown on larger screens */}
      <div className="navbar-center hidden md:flex">
        <ul className="flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg">
          {links}
        </ul>
      </div>

      {/* Mobile View - Dropdown Menu */}
      <div className="flex items-center  md:hidden">
        <div className="dropdown pr-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {isOpen && (
            <ul className="dropdown-content bg-white text-blue-800  z-[50] p-4 shadow rounded-box w-24">
              {links}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
