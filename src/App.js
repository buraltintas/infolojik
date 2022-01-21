import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Solutions from "./components/solutions/Solutions";
import classes from "./App.module.css";
import Duty from "./components/duty/Duty";

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

      <Duty />
    </React.Fragment>
  );
}

export default App;
