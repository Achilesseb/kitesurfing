import { useEffect } from "react";
import { useMap } from "react-leaflet";
import * as L from "leaflet";

export const MapCurrentPosition = ({ setCurrentPosition }) => {
  const map = useMap();

  const onClick = (e) => {
    const existingLayer = Object.values(map._layers).find(
      (layer) => layer.id === "currentPosition"
    );
    if (existingLayer) map.removeLayer(existingLayer);
    const latlng = map.mouseEventToLatLng(e.originalEvent);
    const newMarker = L.marker(e.latlng, { draggable: true });
    newMarker.id = "currentPosition";
    newMarker.bindPopup("CURRENT POSITION");
    map.addLayer(newMarker);
    setCurrentPosition(latlng);
  };
  useEffect(() => {
    map.on("click", onClick);
    return () => {
      map.off("click", onClick);
    };
  }, []);

  return;
};
