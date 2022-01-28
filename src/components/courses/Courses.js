import classes from "./Courses.module.css";
import oracle from "./oracle-logo.png";
import microsoft from "./microsoft-logo.png";
import pentaho from "./pentaho-logo.png";
import { useState, useRef, useEffect } from "react";

const Courses = () => {
  const [oracleModalOpen, setOracleModalOpen] = useState(false);
  const [microsoftModalOpen, setMicrosoftModalOpen] = useState(false);
  const [pentahoModalOpen, setPentahoModalOpen] = useState(false);

  return (
    <section className={classes.courses}>
      <div className={classes.typingHeading}>Eğitimlerimiz </div>
      <div className={classes.coursesContainer}>
        <div className={classes.courseCard}>
          <img
            className={classes.courseLogo}
            src={oracle}
            alt="logo of oracle"
          />
          <h1 className={classes.courseHeader}>Oracle</h1>
          <div className={classes.border}></div>
          <div className={classes.detail}>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>ODI 11g, 12c</p>
            </div>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>OBIEE 12c</p>
            </div>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>Veri Ambarı</p>
            </div>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>Modelleme</p>
            </div>
          </div>
          <button
            className={classes.button}
            onClick={() => setOracleModalOpen(true)}
          >
            Detaylar
          </button>
        </div>
        <div className={classes.courseCard}>
          <img
            className={classes.courseLogo}
            src={microsoft}
            alt="logo of microsoft"
          />
          <h1 className={classes.courseHeader}>Microsoft</h1>
          <div className={classes.border}></div>
          <div className={classes.detail}>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>SSIS</p>
            </div>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>PowerBI</p>
            </div>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>Veri Ambarı</p>
            </div>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>Modelleme</p>
            </div>
          </div>
          <button
            className={classes.button}
            onClick={() => setMicrosoftModalOpen(true)}
          >
            Detaylar
          </button>
        </div>
        <div className={classes.courseCard}>
          <img
            className={classes.courseLogo}
            src={pentaho}
            alt="logo of pentaho"
          />
          <h1 className={classes.courseHeader}>Pentaho</h1>
          <div className={classes.border}></div>
          <div className={classes.detail}>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>Pentaho ETL</p>
            </div>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>Pentaho Raporlama</p>
            </div>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>Veri Ambarı</p>
            </div>
            <div className={classes.detailText}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110,193,228)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="216 72 104 184 48 128"
                  fill="none"
                  stroke="rgb(110,193,228)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
              <p>Modelleme</p>
            </div>
          </div>
          <button
            className={classes.button}
            onClick={() => setPentahoModalOpen(true)}
          >
            Detaylar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
