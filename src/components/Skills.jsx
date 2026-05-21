import React from "react";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      techs: [
        "React",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "TypeScript",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Backend & DB",
      techs: [
        "Node.js",
        "Express",
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      title: "Tools & DevOps",
      techs: [
        "Git & GitHub",
        "Docker",
        "VS Code",
        "Vercel / Netlify",
        "Figma",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#0f3d2e] text-white px-5 sm:px-8 md:px-16"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Green Glow */}
        <div className="absolute top-[-120px] left-[-80px] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-green-500 rounded-full blur-3xl opacity-20"></div>

        {/* Yellow Glow */}
        <div className="absolute bottom-[-120px] right-[-80px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Technical Skills
          </h2>

          <div className="h-1 w-16 sm:w-20 bg-yellow-300 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl hover:scale-105 hover:border-yellow-300/40 transition duration-500"
            >

              <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-6 text-center md:text-left">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">

                {category.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm sm:text-base font-medium text-green-50 hover:bg-yellow-300 hover:text-green-950 transition duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}