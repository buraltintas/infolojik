import React from "react";
import styles from "./Footer.module.css";
import classes from "./Map.module.css";
import "./Footerlogo.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const position = [40.9931462081776, 29.067158102897583];

  return (
    <footer className={styles.sectionFooter}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <div className={styles.email}>
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
            <p>info@infolojik.com</p>
          </div>
          <div className={styles.adress}>
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
            <p>
              Merdivenköy Mah. Nur Sok. No:1/1 B Blok Kat:15
              <br />
              34732 Kadıköy/İstanbul
            </p>
          </div>
        </div>

        <div className={classes.map}>
          <MapContainer
            style={{ width: "25rem", height: "20rem" }}
            center={position}
            zoom={15}
            scrollWheelZoom={true}
            className={classes.mapContainer}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
              <Popup>
                <div className={classes.popup}>
                  <h3>
                    Ulaşım için{" "}
                    <a
                      target="_blank"
                      href="https://goo.gl/maps/FwU2gnWworE8BgEN8"
                    >
                      tıklayınız.
                    </a>
                  </h3>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* <MapContainer
          style={{ width: "40rem", height: "25rem" }}
          center={position}
          zoom={16}
          scrollWheelZoom={true}
          className={classes.mapContainer}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <h2>Yol tarifi için </h2>
            </Popup>
          </Marker>
        </MapContainer> */}
      </div>
      <div className={styles.footer}>
        <p className={styles.copyright}>
          <strong>infolojik</strong> &copy; {year} | Tüm hakları saklıdır.
        </p>
        <div>
          <a target="_blank" href="https://www.facebook.com/infolojik">
            <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
          </a>
          <a target="_blank" href="https://twitter.com/infolojik">
            <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/infolojik/">
            <ion-icon class="social-icon" name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
