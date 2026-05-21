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
      className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical Skills
          </h2>

          <div className="h-1 w-12 bg-sky-400 mx-auto mt-4 rounded"></div>

        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-slate-900/70 border border-slate-700 rounded-2xl shadow-2xl hover:border-sky-400 hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-full text-sm font-medium text-slate-300 hover:border-sky-400 hover:text-sky-400 transition duration-300 cursor-default"
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