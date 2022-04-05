import { setSpotsData } from "./redux/actions";
export const fixMarkerIcon = (L) => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
};

const DATA_URL = "https://6246b943739ac8459191ce55.mockapi.io/spot";
export const fetchData = async (dispatch) => {
  const data = await fetch(DATA_URL)
    .then((response) => response.json())
    .then((results) => dispatch(setSpotsData(results)));
};

export const formatPopUpData = (data) => {
  console.log(data);
  if (data === "lat") return "latitude";
  if (data === "long") return "longitude";
  if (data === "probability") return "wind probability";
  if (data === "month") return "when to go";
};
