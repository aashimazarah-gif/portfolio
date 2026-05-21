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
      className="relative py-16 sm:py-20 overflow-hidden bg-[#0f3d2e] text-white px-5 sm:px-8 md:px-16"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Green Glow */}
        <div className="absolute top-[-120px] left-[-80px] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-green-500 rounded-full blur-3xl opacity-20"></div>

        {/* Yellow Glow */}
        <div className="absolute bottom-[-120px] right-[-80px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Education Timeline
          </h2>

          <div className="h-1 w-16 sm:w-20 bg-yellow-300 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-white/20 ml-3 sm:ml-6 space-y-10 sm:space-y-12">

          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 sm:pl-10 group"
            >

              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-[#0f3d2e] border-2 border-yellow-300 rounded-full -left-[9px] top-2 group-hover:bg-yellow-300 transition duration-300"></div>

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-5 sm:p-7 shadow-2xl hover:scale-[1.02] hover:border-yellow-300/40 transition duration-500">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">

                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 leading-snug">
                    {item.degree}
                  </h3>

                  <span className="inline-block w-fit px-4 py-1 bg-yellow-300/10 text-yellow-300 text-xs sm:text-sm font-semibold rounded-full border border-yellow-300/30">
                    {item.duration}
                  </span>

                </div>

                <p className="text-green-50 font-medium mb-3 text-sm sm:text-base">
                  {item.institution}
                </p>

                <p className="text-green-50/70 text-sm sm:text-base leading-relaxed">
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