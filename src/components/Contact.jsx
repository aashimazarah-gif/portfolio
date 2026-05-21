import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
          <div className="h-1 w-12 bg-indigo-400 mx-auto mt-4 rounded"></div>
          <p className="text-slate-400 mt-6 max-w-md mx-auto">
            Whether you want to discuss a project, query an opening, or just say hello, drop me a message!
          </p>
        </div>

        <form className="space-y-4 max-w-lg mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
            <textarea 
              rows="4" 
              placeholder="Your message here..."
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-500 resize-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold rounded-lg shadow-md hover:shadow-indigo-500/10 mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}