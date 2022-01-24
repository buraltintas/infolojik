import React from "react";
import styles from "./Footer.module.css";
import "./Footerlogo.css";
import logo from "../../logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.sectionFooter}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.email}>
            <div className={styles.iconDiv}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110, 193, 227)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                  fill="none"
                  stroke="rgb(110, 193, 227)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <polyline
                  points="224 56 128 144 32 56"
                  fill="none"
                  stroke="rgb(110, 193, 227)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
            </div>

            <p>info@infolojik.com</p>
          </div>
          <div className={styles.adress}>
            <div className={styles.iconDiv}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="rgb(110, 193, 227)"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="88"
                  y1="168"
                  x2="48"
                  y2="208"
                  fill="none"
                  stroke="rgb(110, 193, 227)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <path
                  d="M154.3,29.7,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c8.4-11.1,21.6-34.1,10.1-57l62.3-62.3a8,8,0,0,0,0-11.4L165.7,29.7A8,8,0,0,0,154.3,29.7Z"
                  fill="none"
                  stroke="rgb(110, 193, 227)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </div>
            <p>
              Dumlupınar Mh. Gümüşdere Çıkmazı Sk. A Blok Apt. No: 1A/23
              Kadıköy/İstanbul
            </p>
          </div>
        </div>

        <div className={styles.footerMap}></div>
      </div>
      <div className={styles.footer}>
        <p className={styles.copyright}>
          <strong>infolojik</strong> &copy; {year} | Tüm hakları saklıdır.
        </p>
        <div>
          <a href="https://www.facebook.com/profile.php?id=616346676">
            <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
          </a>
          <a href="https://twitter.com/burak_alti">
            <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/burak-alt%C4%B1nta%C5%9F-8b796b1b8/">
            <ion-icon class="social-icon" name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
