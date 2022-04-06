import React, { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import PopUp from "../Popups/popUp-component";
import "./markers-component.styles.scss";
import { selectFilteredSpots } from "../../redux/reducer";
import { setFilteredSpots, setFilters } from "../../redux/actions";

const SpotMarkers = () => {
  const dispatch = useDispatch();
  const spots = useSelector(selectFilteredSpots);
  console.log(spots);
  dispatch(setFilteredSpots(spots));
  return spots.map((spot) => (
    <Marker position={[spot.lat, spot.long]} key={spot.id}>
      <Popup>
        <PopUp props={spot} />
      </Popup>
    </Marker>
  ));
};
export default SpotMarkers;
