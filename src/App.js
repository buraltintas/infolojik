import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Solutions from "./components/solutions/Solutions";
import classes from "./App.module.css";
import Duty from "./components/duty/Duty";
import Partners from "./components/partners/Partners";
import References from "./components/references/References";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Map from "./components/footer/Map";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <Solutions />
      </div>
      <div data-aos="fade-up">
        <Duty />
      </div>
      <div data-aos="fade-up">
        <Partners />
      </div>
      <div data-aos="fade-up">
        <References />
      </div>
      <div data-aos="fade-up">
        <Courses />
      </div>
      <div data-aos="fade-down">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
