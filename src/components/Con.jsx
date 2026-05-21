import React from "react";

export default function Contact() {
  return (
    <section
      id="con"
      className="relative min-h-screen overflow-hidden bg-[#0f3d2e] text-white px-5 sm:px-8 md:px-16 py-16 sm:py-20 flex items-center"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Green Glow */}
        <div className="absolute top-[-120px] left-[-80px] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-green-500 rounded-full blur-3xl opacity-20"></div>

        {/* Yellow Glow */}
        <div className="absolute bottom-[-120px] right-[-80px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

      </div>

      <div className="relative max-w-5xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">

          <p className="text-yellow-300 tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
        
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            CONTACT ME
          </h2>

          <div className="h-1 w-16 sm:w-20 bg-yellow-300 mx-auto mt-4 rounded-full"></div>

          <p className="text-green-50/70 mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Feel free to contact me for collaborations, projects or freelance
            opportunities.
          </p>

        </div>

        {/* Contact Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">

            {/* Email */}
            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:scale-105 hover:border-yellow-300/40 transition duration-500">

              <div className="w-14 h-14 mx-auto rounded-full bg-yellow-300/10 border border-yellow-300/30 flex items-center justify-center mb-4">
                <span className="text-yellow-300 text-2xl">✉</span>
              </div>

              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                Email
              </h3>

              <p className="text-green-50/80 text-sm sm:text-base break-all">
                aashimazarah@gmail.com
              </p>

            </div>

            {/* Phone */}
            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:scale-105 hover:border-yellow-300/40 transition duration-500">

              <div className="w-14 h-14 mx-auto rounded-full bg-yellow-300/10 border border-yellow-300/30 flex items-center justify-center mb-4">
                <span className="text-yellow-300 text-2xl">☎</span>
              </div>

              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                Phone
              </h3>

              <p className="text-green-50/80 text-sm sm:text-base">
                +91 9567763899
              </p>

            </div>

            {/* Location */}
            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:scale-105 hover:border-yellow-300/40 transition duration-500">

              <div className="w-14 h-14 mx-auto rounded-full bg-yellow-300/10 border border-yellow-300/30 flex items-center justify-center mb-4">
                <span className="text-yellow-300 text-2xl">📍</span>
              </div>

              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                Location
              </h3>

              <p className="text-green-50/80 text-sm sm:text-base">
                Kerala, India
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}