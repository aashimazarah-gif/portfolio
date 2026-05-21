import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-end">
        
        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-sky-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-sky-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-sky-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-sky-400 transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#con"
              className="hover:text-sky-400 transition duration-300"
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