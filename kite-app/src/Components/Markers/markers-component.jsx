import React, { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import PopUp from "../Popups/popUp-component";
import "./markers-component.styles.scss";
import { selectFilteredSpots } from "../../redux/spotSlice/spotSlice";
import { greenIcon, redIcon, yellowIcon } from "../../utils";
import { useDispatch } from "react-redux";
import { setSelectedSpot } from "../../redux/spotSlice/actions";
import { useMap } from "react-leaflet";

const SpotMarkers = () => {
  const map = useMap();
  let idToFind;
  const dispatch = useDispatch();
  const data = useSelector((data) => data.spots);
  const selectedSpot = data.selectedSpot;
  const spots = useSelector(selectFilteredSpots);

  useEffect(() => {
    onClickAnotherSpot();
  }, [spots.length]);

  const onClickAnotherSpot = () => {
    const existingLayer = Object.values(map._layers).find(
      (layer) => layer.id === "currentPosition"
    );
    if (existingLayer) map.removeLayer(existingLayer);
  };

  useEffect(() => {
    if (selectedSpot !== null) {
      map.closePopup();
      map.setView([selectedSpot.lat, selectedSpot.long]);
    }
  });

  const handleMarkerClick = (e) => {
    onClickAnotherSpot();
    idToFind = e.target.options.children.props.children.props.props.id;
    const spotToFind = data.spots.find((spot) => spot.id === idToFind);
    if (selectedSpot === null || selectedSpot.id !== idToFind)
      dispatch(setSelectedSpot(spotToFind));
    return false;
  };

  const getIcon = (id, selectedId, isFavourite) => {
    if (selectedId === id) {
      return redIcon;
    } else if (isFavourite) {
      return yellowIcon;
    } else return greenIcon;
  };

  return spots.map((spot) => {
    const isFavourite =
      data.favorites?.find((fav) => fav.spot === Number(spot.id)) !== undefined;
    return (
      <Marker
        eventHandlers={{ click: (e) => handleMarkerClick(e) }}
        position={[spot.lat, spot.long]}
        key={spot.id}
        icon={getIcon(spot.id, selectedSpot?.id, isFavourite)}
      >
        <Popup>
          <PopUp
            props={spot}
            isFavourite={isFavourite}
            favorites={data.favorites}
          />
        </Popup>
      </Marker>
    );
  });
};
export default SpotMarkers;
