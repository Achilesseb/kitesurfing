import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import PopUp from "../Popups/popUp-component";

const SpotMarkers = () => {
  const spotsData = useSelector((datas) => datas.spots);
  return spotsData.map((spot) => (
    <Marker position={[spot.lat, spot.long]}>
      <Popup>
        <PopUp props={spot} />
      </Popup>
    </Marker>
  ));
};
export default SpotMarkers;
