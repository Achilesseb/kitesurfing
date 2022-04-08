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
import { useState } from "react";

const Map = () => {
  const data = useSelector((data) => data);
  const length = data.spots.length;
  const selectedSpotData = data.selectedSpot;
  const addBoxStatus = data.addSpotStatus;
  const centerCoord = setCenterCoords(selectedSpotData);
  fixMarkerIcon(L);
  const southWest = L.latLng(-300, -300),
    northEast = L.latLng(300, 300),
    bounds = L.latLngBounds(southWest, northEast);
  const [coords, setCoords] = useState(null);
  const MyMap = () => {
    let newMarker;
    const map = useMap();
    map.on("click", function (e) {
      if (newMarker != undefined) map.removeLayer(newMarker);
      const popLocation = e.latlng;
      const latlng = map.mouseEventToLatLng(e.originalEvent);
      newMarker = L.marker(e.latlng, { draggable: true });
      map.addLayer(newMarker);
      setCoords(latlng);
    });
  };

  return (
    <div className="mapContainer">
      <MapContainer
        center={centerCoord}
        zoom={3}
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
        {addBoxStatus === true ? (
          <AddNewLocation props={{ coords, length }} />
        ) : null}
      </div>
      <div className="mapContainer filterButton">
        <FilterButton />
      </div>
    </div>
  );
};

export default Map;
