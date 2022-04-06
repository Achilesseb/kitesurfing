import React, { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import PopUp from "../Popups/popUp-component";
import "./markers-component.styles.scss";

const SpotMarkers = () => {
  let spotData;
  const data = useSelector((data) => data);
  console.log(data);
  if (data.filters.length === 0) spotData = data.spots;
  else
    spotData = data.spots.filter(
      (spots) =>
        spots.country === data.filters[0] &&
        spots.probability == data.filters[1]
    );
  console.log(spotData);
  return spotData.map((spot) => (
    <Marker position={[spot.lat, spot.long]} key={spot.id}>
      <Popup>
        <PopUp props={spot} />
      </Popup>
    </Marker>
  ));
};
export default SpotMarkers;
