import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-400/80 backdrop-blur-md border-b border-yellow-300 shadow-lg">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-4 flex items-center justify-end">

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-6 md:gap-8 text-green-900 text-sm sm:text-base font-semibold">

          <li>
            <a
              href="#home"
              className="hover:text-green-700 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-green-700 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-green-700 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-green-700 transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-green-700 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;