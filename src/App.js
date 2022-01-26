import React, { useEffect, useRef, useState } from "react";
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
import "./App.css";
import logo from "./logo.png";

function App() {
  const [isOnTop, setIsOnTop] = useState(false);

  const about = useRef();
  const solutions = useRef();
  const duty = useRef();
  const partners = useRef();
  const references = useRef();
  const courses = useRef();
  const footer = useRef();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setIsOnTop(true);
  };

  const scrollAbout = () => {
    about.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollSolutions = () => {
    solutions.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollDuty = () => {
    duty.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollPartners = () => {
    partners.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollReferences = () => {
    references.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollCourses = () => {
    courses.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollFooter = () => {
    footer.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div className={classes.logoBox}>
        <img
          src={logo}
          alt="Logo"
          className={classes.logo}
          onClick={scrollTop}
          checked={!isOnTop}
        />
      </div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li onClick={scrollAbout} className="navigation__item">
              <p className="navigation__link">Hakkımızda</p>
            </li>
            <li onClick={scrollSolutions} className="navigation__item">
              <p className="navigation__link">Çözümlerimiz</p>
            </li>
            <li onClick={scrollDuty} className="navigation__item">
              <p className="navigation__link">Hizmetlerimiz</p>
            </li>
            <li onClick={scrollPartners} className="navigation__item">
              <p className="navigation__link">Çözüm Ortaklarımız</p>
            </li>
            <li onClick={scrollReferences} className="navigation__item">
              <p className="navigation__link">Referanslarımız</p>
            </li>
            <li onClick={scrollCourses} className="navigation__item">
              <p className="navigation__link">Eğitimlerimiz</p>
            </li>
            <li onClick={scrollFooter} className="navigation__item">
              <p className="navigation__link">İletişim</p>
            </li>
          </ul>
        </nav>
      </div>

      <Header scrollAbout={scrollAbout} />
      <div ref={about} data-aos="fade-up">
        <About scrollSolutions={scrollSolutions} />
      </div>
      <div ref={solutions} data-aos="fade-up">
        <Solutions />
      </div>
      <div ref={duty} data-aos="fade-up">
        <Duty />
      </div>
      <div ref={partners} data-aos="fade-up">
        <Partners />
      </div>
      <div ref={references} data-aos="fade-up">
        <References />
      </div>
      <div ref={courses} data-aos="fade-up">
        <Courses />
      </div>
      <div ref={footer} data-aos="fade-up">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
