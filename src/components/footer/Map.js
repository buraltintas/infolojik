import classes from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import logo from "../../logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Map = () => {
  const position = [40.9931462081776, 29.067158102897583];

  return (
    <div data-aos="fade-left" className={classes.map}>
      <MapContainer
        style={{ width: "58rem", height: "38rem" }}
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
            <h2>
              Yol tarifi için{" "}
              <a target="_blank" href="https://goo.gl/maps/FwU2gnWworE8BgEN8">
                tıklayınız.
              </a>
            </h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
