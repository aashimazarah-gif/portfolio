import React from "react";

export default function Education() {
  const timeline = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Your University Name",
      duration: "2020 - 2024",
      description:
        "Specialized in Software Engineering. Graduated with Honors. Core coursework included Data Structures, Algorithms, Database Systems, and Cloud Computing.",
    },
    {
      degree: "Advanced Web Development Certification",
      institution: "Tech Academy / BootCamp",
      duration: "2024",
      description:
        "Intensive training focused on modern full-stack engineering, agile methodologies, and continuous deployment strategies.",
    },
  ];

  return (
    <section 
    id="education"
    className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white px-6">
      
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Education Timeline
          </h2>

          <div className="h-1 w-12 bg-sky-400 mx-auto mt-4 rounded"></div>

        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-6 space-y-12">

          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 group"
            >

              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-slate-900 border-2 border-sky-400 rounded-full -left-[9px] top-1.5 group-hover:bg-sky-400 transition-colors duration-300" />

              {/* Content Card */}
              <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 shadow-2xl hover:border-sky-400 transition duration-300">

                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-3">

                  <h3 className="text-xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <span className="inline-block px-4 py-1 bg-sky-400/10 text-sky-400 text-xs font-semibold rounded-full border border-sky-400/30">
                    {item.duration}
                  </span>

                </div>

                <p className="text-slate-300 font-medium mb-3">
                  {item.institution}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}