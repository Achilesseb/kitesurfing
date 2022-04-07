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

const Map = () => {
  const selectedSpotData = useSelector((data) => data.selectedSpot);
  const centerCoord = setCenterCoords(selectedSpotData);
  fixMarkerIcon(L);
  const southWest = L.latLng(-300, -300),
    northEast = L.latLng(300, 300),
    bounds = L.latLngBounds(southWest, northEast);

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
        maxBounds={bounds}
      >
        {/* <MyMap props={centerCoord} /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          style={{ zIndex: "0" }}
        />
        <SpotMarkers />
      </MapContainer>
      <div className="mapContainer filterButton">
        <FilterButton />
      </div>
    </div>
  );
};

export default Map;
