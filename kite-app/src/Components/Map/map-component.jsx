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
import AddNewLocation from "../NewLocation/form-component";

const MyMap = () => {
  const map = useMap();
  map.on("click", function (e) {
    const popLocation = e.latlng;
    const latlng = map.mouseEventToLatLng(e.originalEvent);
    console.log(latlng);
    const { lat, lng } = latlng;
    var newMarker = new L.marker(e.latlng).addTo(map);
    newMarker.bindPopup().setLatLng(popLocation).setContent().openOn(map);
  });
  return;
};

const Map = () => {
  const data = useSelector((data) => data);
  const selectedSpotData = data.selectedSpot;
  const addBoxStatus = data.addSpotStatus;
  console.log(addBoxStatus);
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
        <MyMap />
        <SpotMarkers />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url=" https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          style={{ zIndex: "0" }}
        />
      </MapContainer>
      <div className="addLocation-box">
        {addBoxStatus === true ? <AddNewLocation /> : null}
      </div>
      <div className="mapContainer filterButton">
        <FilterButton />
      </div>
    </div>
  );
};

export default Map;
