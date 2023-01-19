import { MapContainer, TileLayer } from "react-leaflet";
import { useState } from "react";

const Cloudss = () => {
  const [location, setLocation] = useState({});
  return (
    <div>
      <MapContainer
        center={
          location.lat && location.lon ? [location.lat, location.lon] : [0, 0]
        }
        zoom={2}
        style={{ height: "70vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <TileLayer url="https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=e9f46ddf13344ba6fe404b5323503639" />
      </MapContainer>
    </div>
  );
};

export default Cloudss;
