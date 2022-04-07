import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { fixMarkerIcon } from "../../utils";
import SpotMarkers from "../Markers/markers-component";
import FilterButton from "../Filter/filter-component";
import "./map-component.styles.scss";
import { useSelector } from "react-redux";
import { setCenterCoords } from "../../utils";

const MyMap = (props) => {
  const center = props.props;
  const map = useMap();
  const southWest = L.latLng(200, 200),
    northEast = L.latLng(-200, -200),
    bounds = L.latLngBounds(southWest, northEast);
  map.closePopup();
  map.setMaxBounds(bounds);
  map.setView(center);
  return <SpotMarkers />;
};
const Map = () => {
  const selectedSpotData = useSelector((data) => data.selectedSpot);
  const centerCoord = setCenterCoords(selectedSpotData);
  fixMarkerIcon(L);
  return (
    <div className="mapContainer">
      <MapContainer
        center={centerCoord}
        zoom={6}
        maxZoom={10}
        minZoom={2}
        style={{
          width: "100%",
          height: "60vh",
          zIndex: "0",
          backgroundColor: "white",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          style={{ zIndex: "0" }}
        />
        <MyMap props={centerCoord} />
      </MapContainer>
      <div className="mapContainer filterButton">
        <FilterButton />
      </div>
    </div>
  );
};

export default Map;
