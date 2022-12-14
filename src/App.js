import {React, useEffect } from "react";
import Hero from "./components/Hero";
import Specializing from "./components/Specializing";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Scrollup from "./components/scrollup";

/**
 * @author
 * @function App
 **/

const App = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  
  return (
    <div>
      <Hero />
      <Specializing />
      <LatestProjects />
      <Qualification />
      <Testimonials />
      <Footer />
      <Scrollup/> 
    </div>
  );
};

export default App;
