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
  await fetch(DATA_URL)
    .then((response) => response.json())
    .then((results) => dispatch(setSpotsData(results)));
};

export const formatPopUpLabelData = (data) => {
  if (data === "lat") return "latitude";
  if (data === "long") return "longitude";
  if (data === "probability") return "wind probability";
  if (data === "month") return "when to go";
};

export const formatPopUpValueData = (data) => {
  if (data[0] === "lat") {
    if (data[1] > 0) {
      return Math.abs(data[1]) + "° N";
    }
    if (data[1] < 0) {
      return Math.abs(data[1]) + "° S";
    }
  }
  if (data[0] === "long") {
    if (data[1] > 0) {
      return Math.abs(data[1]) + "° E";
    }
    if (data[1] < 0) {
      return Math.abs(data[1]) + "° W";
    }
  }
  if (data[0] === "probability") return data[1] + "%";
  else return data[1];
};

export const toUpperCamelCase = (word) => {
  return `${word.slice(0, 1).toUpperCase() + word.slice(1)}`;
};
