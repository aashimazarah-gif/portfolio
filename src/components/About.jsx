import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white px-6"
    >
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About Me
          </h2>

          <div className="h-1 w-12 bg-sky-400 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
            <p>
              Hello! I'm a passionate developer who enjoys creating things that
              live on the internet. My journey in web development started with
              a curiosity for design and a drive to solve complex problems.
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of building
              software for diverse projects, ranging from responsive landing
              pages to complex web architectures. My main focus is delivering
              efficient, maintainable, and highly performant code.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-slate-900/70 p-6 rounded-2xl shadow-2xl border border-slate-700 space-y-4 hover:border-sky-400 transition duration-300">

            <h3 className="text-xl font-bold text-white">
              Quick Highlights
            </h3>

            <ul className="space-y-3">

              <li className="flex items-center gap-3 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                Available for full-time roles & freelance
              </li>

              <li className="flex items-center gap-3 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                Strong focus on clean architecture & UX
              </li>

              <li className="flex items-center gap-3 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                Continuous learner adapting to modern stacks
              </li>

            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}