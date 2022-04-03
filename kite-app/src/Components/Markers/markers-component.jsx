import React, { useContext } from "react";
import { Marker, Popup } from "react-leaflet";
import { SpotDataContext } from "../../utils";

const SpotMarkers = () => {
  const spotData = useContext(SpotDataContext);
  return spotData.map((spot) => (
    <Marker position={[spot.lat, spot.long]} key={spot.id}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  ));
};
export default SpotMarkers;
