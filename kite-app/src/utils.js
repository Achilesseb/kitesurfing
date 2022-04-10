import * as L from "leaflet";
const monthNames = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};
export const fixMarkerIcon = (L) => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
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

export const setCenterCoords = (selectedSpotData) => {
  let lat, long;
  if (selectedSpotData === null) {
    return [(lat = 51.505), (long = -0.09)];
  }
  if (selectedSpotData !== null) {
    return [(lat = selectedSpotData.lat), (long = selectedSpotData.long)];
  }
};

export const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 12],
  popupAnchor: [1, 1],
  shadowSize: [41, 41],
});
export const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 12],
  popupAnchor: [1, 1],
  shadowSize: [41, 41],
});
export const yellowIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 12],
  popupAnchor: [1, 1],
  shadowSize: [41, 41],
});
export const sortDataAscendant = (data, filter) => {
  if (filter === "name") {
    data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
    });
  }
  if (filter === "month") {
    data.sort((a, b) => {
      const monthA = a.month;
      const monthB = b.month;
      if (monthNames[monthA] < monthNames[monthB]) return -1;
    });
  }
  if (filter === "probability") {
    data.sort((a, b) => {
      const probabilityA = a.probability;
      const probabilityB = b.probability;
      if (probabilityA < probabilityB) return -1;
    });
  }

  return data;
};
export const sortDataDescendant = (data, filter) => {
  if (filter === "name") {
    data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA > nameB) return 1;
    });
  }
  if (filter === "month") {
    data.sort((a, b) => {
      const monthA = a.month;
      const monthB = b.month;
      if (monthNames[monthA] < monthNames[monthB]) return 1;
    });
  }
  if (filter === "probability") {
    data.sort((a, b) => {
      const probabilityA = a.probability;
      const probabilityB = b.probability;

      if (probabilityA < probabilityB) return 1;
    });
  }

  return data;
};
