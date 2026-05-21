import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0f3d2e] text-white flex items-center justify-center px-5 sm:px-8 md:px-16 py-16"
    >

      {/* Brazilian Glow Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Green Glow */}
        <div className="absolute top-[-120px] left-[-80px] w-[350px] h-[350px] bg-[#16a34a] rounded-full blur-3xl opacity-40"></div>

        {/* Yellow Glow */}
        <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-[#facc15] rounded-full blur-3xl opacity-30"></div>

        {/* Mixed Glow */}
        <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-[#22c55e] rounded-full blur-3xl opacity-20"></div>

      </div>

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left animate-fadeIn">

          <p className="text-yellow-300 tracking-[4px] text-xs sm:text-sm font-semibold">
            HELLO, I'M
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Aashima <span className="text-yellow-300">J</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-green-100">
            Aspiring Frontend Developer
          </h2>

          <p className="text-green-50/80 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto md:mx-0">
            I create modern, responsive and user-friendly web applications
            using React, JavaScript and creative UI design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-4">

            <button className="w-full sm:w-auto bg-yellow-300 text-green-950 px-7 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-yellow-300/30 transition duration-300">
              Hire Me
            </button>

            <button className="w-full sm:w-auto border-2 border-yellow-300 text-yellow-300 px-7 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:text-green-950 transition duration-300">
              Download CV
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center order-first md:order-last">

          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-yellow-300 blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

            
  <img
  src="/profile.png"
  alt="Aashima"
  className="relative 
  w-[220px] h-[220px]
  sm:w-[300px] sm:h-[300px]
  md:w-[400px] md:h-[400px]
  object-cover rounded-full border-4 border-yellow-300
  shadow-2xl shadow-yellow-300/20
  hover:scale-105 transition duration-500"
/>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;