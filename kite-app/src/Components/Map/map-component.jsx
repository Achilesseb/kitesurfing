import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { fixMarkerIcon } from "../../utils";

const MyMap = () => {
  const map = useMap();
  console.log(map.getCenter());
  return (
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};
const Map = () => {
  fixMarkerIcon(L);
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: "100%", height: "70vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyMap />
    </MapContainer>
  );
};

export default Map;
