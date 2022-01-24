import classes from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import logo from "../../logo.png";

const Map = () => {
  const position = [40.994397914530765, 29.06356160848624];

  return (
    <div className={classes.map}>
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
              <a target="_blank" href="https://goo.gl/maps/cXrxggLkdfQukMQf6">
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
