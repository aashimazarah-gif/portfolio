import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills"; 
import Education from "./components/Education";
import Contact from "./components/Contact"; 
import Con from "./components/Con"; 
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 

function App() {
  return (
    <div>
        <Home />
        <About />
        <Skills /> 
        <Education />
        <Con />
        <Contact />
        <Navbar />
        <Footer />
    </div>
  );
}

export default App;