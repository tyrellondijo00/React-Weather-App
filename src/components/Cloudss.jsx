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
        zoom={3}
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer url="https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=e9f46ddf13344ba6fe404b5323503639" />
      </MapContainer>
    </div>
  );
};

export default Cloudss;
