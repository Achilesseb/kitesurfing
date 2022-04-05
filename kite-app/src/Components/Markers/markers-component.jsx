import React, { useContext } from "react";
import { Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { SpotDataContext } from "../../utils";

const SpotMarkers = () => {
  const spotsData = useSelector((datas) => datas.spots);
  return spotsData.map((spot) => (
    <Marker position={[spot.lat, spot.long]} key={spot.id}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  ));
};
export default SpotMarkers;
