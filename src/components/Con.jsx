import React from "react";

export default function Contact() {
  return (
    <section 
    id="con"
    className="min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white px-6 py-20 flex items-center">
      
      <div className="max-w-4xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-sky-400 tracking-[4px] text-sm font-semibold mb-3">
        
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            CONTACT ME
          </h2>

          <div className="h-1 w-12 bg-sky-400 mx-auto mt-4 rounded"></div>

          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Feel free to contact me for collaborations, projects or freelance opportunities.
          </p>

        </div>

        {/* Contact Card */}
        <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-10 shadow-2xl hover:border-sky-400 transition duration-300">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            {/* Email */}
            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 hover:border-sky-400 hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center mb-4">
                <span className="text-sky-400 text-2xl">✉</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Email
              </h3>

              <p className="text-slate-400">
                aashimazarah@gmail.com
              </p>

            </div>

            {/* Phone */}
            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 hover:border-sky-400 hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center mb-4">
                <span className="text-sky-400 text-2xl">☎</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Phone
              </h3>

              <p className="text-slate-400">
                +91 9876543210
              </p>

            </div>

            {/* Location */}
            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 hover:border-sky-400 hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center mb-4">
                <span className="text-sky-400 text-2xl">📍</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Location
              </h3>

              <p className="text-slate-400">
                Kerala, India
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}