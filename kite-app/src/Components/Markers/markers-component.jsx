import React from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import PopUp from "../Popups/popUp-component";
import "./markers-component.styles.scss";
import { selectFilteredSpots } from "../../redux/reducer";
import { greenIcon, redIcon } from "../../utils";
import { useDispatch } from "react-redux";
import { setSelectedSpot } from "../../redux/actions";

const SpotMarkers = () => {
  let idToFind;
  const dispatch = useDispatch();
  const data = useSelector((data) => data);
  const selectedSpot = data.selectedSpot;
  const handleMarkerClick = (e) => {
    idToFind = e.target.options.children.props.children.props.props.id;
    const spotToFind = data.spots.find((spot) => spot.id === idToFind);
    if (selectedSpot === null || selectedSpot.id !== idToFind)
      dispatch(setSelectedSpot(spotToFind));

    return false;
  };
  const spots = useSelector(selectFilteredSpots);

  return spots.map((spot) => (
    <Marker
      eventHandlers={{ click: (e) => handleMarkerClick(e) }}
      position={[spot.lat, spot.long]}
      key={spot.id}
      icon={
        selectedSpot === null
          ? greenIcon
          : spot.id === selectedSpot.id
          ? redIcon
          : greenIcon
      }
    >
      <Popup>
        <PopUp props={spot} />
      </Popup>
    </Marker>
  ));
};
export default SpotMarkers;
