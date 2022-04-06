import React, { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import PopUp from "../Popups/popUp-component";
import "./markers-component.styles.scss";

const SpotMarkers = () => {
  let spotData;
  const data = useSelector((data) => data);
  const spots = data.spots;
  const filters = data.filters;
  if (filters.length === 0) spotData = spots;
  if (filters[0] === null) {
    spotData = spots.filter((spots) => spots.probability == filters[1]);
  }
  if (filters[1] === null) {
    spotData = spots.filter((spots) =>
      spots.country.includes(
        String(filters[0].slice(0, 1)).toUpperCase() + filters[0].slice(1)
      )
    );
  }
  if (filters[0] && filters[1])
    spotData = spots.filter(
      (spots) => spots.country === filters[0] && spots.probability == filters[1]
    );
  return spotData.map((spot) => (
    <Marker position={[spot.lat, spot.long]} key={spot.id}>
      <Popup>
        <PopUp props={spot} />
      </Popup>
    </Marker>
  ));
};
export default SpotMarkers;
