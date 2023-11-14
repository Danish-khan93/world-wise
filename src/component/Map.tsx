import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCities } from "../context/CitiesContext";

import { useState } from "react";
const Map = () => {
  // @ts-ignore
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();
  const navigate = useNavigate();
  return (
    <Box
      className="bg-[#202020] w-[50%] h-screen"
      onClick={() => {
        navigate("form");
      }}
    >
      <MapContainer
        className="h-[100%]"
        // @ts-ignore
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          // @ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {
          // @ts-ignore
          cities.map((value) => {
            return (
              <Marker
                position={[value?.position?.lat, value?.position?.lng]}
                key={value.id}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })
        }
      </MapContainer>
    </Box>
  );
};

export default Map;
