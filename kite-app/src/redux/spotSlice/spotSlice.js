import { createSelectorHook } from "react-redux";
import { createSelector } from "reselect";

const INITIAL_STATE = {
  spots: [],
  selectedSpot: null,
  filters: [],
  addSpotStatus: false,
  favourites: [],
};

const spotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SPOTS_DATA": {
      return { ...state, spots: action.payload };
    }
    case "SET_FAVOURITES_DATA": {
      return { ...state, favourites: action.payload };
    }
    case "SET_SELECTED_SPOT": {
      return { ...state, selectedSpot: (state.selectedSpot = action.payload) };
    }

    case "DELETE_SPOTS_DATA": {
      return { state: INITIAL_STATE };
    }
    case "FILTER_SPOTS_DATA": {
      return {
        ...state,
        filters: state.filters.concat(action.payload),
      };
    }
    case "DELETE_FILTERS": {
      return {
        ...state,
        filters: [],
      };
    }
    case "SET_FILTERED_DATA": {
      return {
        ...state,
        spots: action.payload,
      };
    }
    case "SET_ADD_STATUS": {
      return {
        ...state,
        addSpotStatus: action.payload,
      };
    }
    case "UPDATE_SPOT_DATA": {
      return {
        ...state,
        spots: state.spots.concat(action.payload),
      };
    }
    default:
      return state;
  }
};
export default spotReducer;

const selectSpots = (state) => {
  return state.spots.spots;
};

export const selectFilteredSpots = createSelector(
  selectSpots,
  (state) => state.spots.filters,
  (spots, filters) => {
    let spotData;
    if (filters.length === 0 || (!filters[0] && !filters[1])) spotData = spots;
    else if (filters[0] === null) {
      spotData = spots.filter((spots) => spots.probability == filters[1]);
    } else if (filters[1] === null) {
      spotData = spots.filter(
        (spots) =>
          spots.country.includes(
            String(filters[0].slice(0, 1)).toUpperCase() + filters[0].slice(1)
          ) ||
          spots.name.includes(
            String(filters[0].slice(0, 1)).toUpperCase() + filters[0].slice(1)
          )
      );
    } else if (filters[0] && filters[1])
      spotData = spots.filter(
        (spots) =>
          spots.country === filters[0] && spots.probability == filters[1]
      );
    return spotData;
  }
);
