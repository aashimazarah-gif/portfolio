import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#0f3d2e] text-white px-5 sm:px-8 md:px-16"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Green Glow */}
        <div className="absolute top-[-120px] left-[-80px] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-green-500 rounded-full blur-3xl opacity-20"></div>

        {/* Yellow Glow */}
        <div className="absolute bottom-[-120px] right-[-80px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

      </div>

      <div className="relative max-w-3xl mx-auto text-center">

        {/* Heading */}
        <div className="mb-12 sm:mb-16">

          <p className="text-yellow-300 tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
            CONTACT
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Get In Touch
          </h2>

          <div className="h-1 w-16 sm:w-20 bg-yellow-300 mx-auto mt-4 rounded-full"></div>

          <p className="text-green-50/70 mt-6 text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Whether you want to discuss a project, query an opening,
            or just say hello, drop me a message!
          </p>

        </div>

        {/* Form */}
        <form
          className="space-y-5 max-w-2xl mx-auto text-left bg-white/10 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >

          {/* Name */}
          <div>

            <label className="block text-sm font-medium text-yellow-300 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-green-50/40 focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 transition duration-300"
            />

          </div>

          {/* Email */}
          <div>

            <label className="block text-sm font-medium text-yellow-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-green-50/40 focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 transition duration-300"
            />

          </div>

          {/* Message */}
          <div>

            <label className="block text-sm font-medium text-yellow-300 mb-2">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Your message here..."
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-green-50/40 focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/20 transition duration-300 resize-none"
            ></textarea>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 sm:py-4 bg-yellow-300 text-green-950 font-bold rounded-xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-300/20 transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}