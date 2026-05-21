import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#0f3d2e] text-white px-5 sm:px-8 md:px-16"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Green Glow */}
        <div className="absolute top-[-120px] left-[-80px] w-[250px] sm:w-[320px] h-[250px] sm:h-[320px] bg-green-500 rounded-full blur-3xl opacity-20"></div>

        {/* Yellow Glow */}
        <div className="absolute bottom-[-120px] right-[-80px] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>

          <div className="h-1 w-16 sm:w-20 bg-yellow-300 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Left Text */}
          <div className="space-y-5 text-green-50/80 leading-relaxed text-base sm:text-lg text-center md:text-left">

            <p>
              Hello! I'm a passionate developer who enjoys creating modern and
              responsive websites with beautiful user experiences.
            </p>

            <p>
              My journey in web development started with curiosity for design,
              creativity and solving real-world problems through code.
            </p>

            <p>
              Today, I focus on building fast, user-friendly and visually
              appealing web applications using modern frontend technologies.
            </p>

          </div>

          {/* Right Card */}
          <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 hover:scale-105 transition duration-500">

            <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-6 text-center md:text-left">
              Quick Highlights
            </h3>

            <ul className="space-y-5">

              <li className="flex items-start gap-3 text-green-50/90 text-sm sm:text-base">
                <span className="w-3 h-3 rounded-full bg-yellow-300 mt-2"></span>
                Available for freelance & internships
              </li>

              <li className="flex items-start gap-3 text-green-50/90 text-sm sm:text-base">
                <span className="w-3 h-3 rounded-full bg-yellow-300 mt-2"></span>
                Passionate about modern UI/UX design
              </li>

              <li className="flex items-start gap-3 text-green-50/90 text-sm sm:text-base">
                <span className="w-3 h-3 rounded-full bg-yellow-300 mt-2"></span>
                Learning React, JavaScript & Full Stack Development
              </li>

              <li className="flex items-start gap-3 text-green-50/90 text-sm sm:text-base">
                <span className="w-3 h-3 rounded-full bg-yellow-300 mt-2"></span>
                Strong focus on responsive web applications
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}