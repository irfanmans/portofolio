import Navbar from "./components/Navbar";
import Home from "./parts/Home";
import About from "./parts/About";
import Footer from "./components/Footer";
import WorkAndEducation from "./parts/WorkAndEducation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "./parts/Certificate";
import Project from "./parts/Project";
import TechStackAndTools from "./parts/TechStackAndTools";

function App() {
  useEffect(function () {
    AOS.init();

    AOS.refresh();
  }, []);
  console.log(window.scrollY);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <WorkAndEducation />
      <TechStackAndTools />
      <Certificate />
      <Project />
      <Footer />
    </>
  );
}

export default App;
