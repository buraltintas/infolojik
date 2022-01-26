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

import "./App.css";
import logo from "./logo.png";

function App() {
  const about = useRef();
  const solutions = useRef();
  const duty = useRef();
  const partners = useRef();
  const references = useRef();
  const courses = useRef();
  const footer = useRef();

  const [menuOpen, setMenuOpen] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuOpen(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
      <nav className={classes.navigation}>
        <div className={classes.logoBox}>
          <img
            src={logo}
            alt="Logo"
            className={classes.logo}
            onClick={scrollTop}
          />
        </div>
        <div ref={wrapperRef} className={classes.menu}>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen ? (
              <svg
                className={classes.navIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="40"
                  y1="128"
                  x2="216"
                  y2="128"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="40"
                  y1="64"
                  x2="216"
                  y2="64"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="40"
                  y1="192"
                  x2="216"
                  y2="192"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </svg>
            ) : (
              <svg
                className={classes.navIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="200"
                  y1="56"
                  x2="56"
                  y2="200"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="200"
                  y1="200"
                  x2="56"
                  y2="56"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
              </svg>
            )}
          </div>
          {menuOpen && (
            <div className={classes.sideMenu}>
              <ul>
                <li>Hakkımızda</li>
                <li>Çözümlerimiz</li>
                <li>Hizmetlerimiz</li>
                <li>Çözüm Ortaklarımız</li>
                <li>Referanslarımız</li>
                <li>Eğitimlerimiz</li>
                <li>İletişim</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      {/* <div className={classes.logoBox}>
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
      </div> */}

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
