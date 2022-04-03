import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { fixMarkerIcon, SpotDataContext } from "../../utils";
import SpotMarkers from "../Markers/markers-component";

const MyMap = () => {
  const map = useMap();
  return <SpotMarkers />;
};
const Map = (props) => {
  const spotData = props.state;
  fixMarkerIcon(L);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: "100%", height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SpotDataContext.Provider value={spotData}>
        <MyMap />
      </SpotDataContext.Provider>
    </MapContainer>
  );
};

export default Map;
