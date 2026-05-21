import React from "react";

function Home() {
  return (
    <section 
    id="home"
    className="min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-6 md:px-16">
      
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6 animate-fadeIn">

          <p className="text-sky-400 tracking-[4px] text-sm font-semibold">
            HELLO, I'M
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Aashima <span className="text-sky-400">J</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-slate-300">
            Aspiring Frontend Developer
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-xl">
            I create modern, responsive and user-friendly web applications
            using React, JavaScript and creative UI design.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-4">

            <button className="bg-sky-400 text-black px-7 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-xl hover:shadow-sky-400/30 transition duration-300">
              Hire Me
            </button>

            <button className="border-2 border-sky-400 px-7 py-3 rounded-full font-semibold hover:bg-sky-400 hover:text-black transition duration-300">
              Download CV
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <div className="relative group">

            <div className="absolute inset-0 rounded-full bg-sky-400 blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

           
  <img
  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
  alt="professional girl avatar"
  className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full border-4 border-sky-400 shadow-2xl shadow-sky-400/30 hover:scale-105 transition duration-500"
/>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;