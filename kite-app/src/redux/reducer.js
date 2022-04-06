import { createSelectorHook } from "react-redux";
import { createSelector } from "reselect";

const INITIAL_STATE = {
  spots: [],
  selectedSpot: {},
  filters: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_SPOTS_DATA": {
      return { ...state, spots: action.payload };
    }

    case "SET_SELECTED_DATA": {
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
    case "FILTERED_SPOTS": {
      return {
        ...state,
        spots: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;

const selectSpots = (state) => state.spots;

export const selectFilteredSpots = createSelector(
  selectSpots,
  (state) => state.filters,
  (spots, filters) => {
    let spotData;
    if (filters.length === 0) spotData = spots;
    if (filters[0] === null) {
      spotData = spots.filter((spots) => spots.probability == filters[1]);
    }
    if (filters[1] === null) {
      spotData = spots.filter((spots) =>
        spots.country.includes(
          String(filters[0].slice(0, 1)).toUpperCase() + filters[0].slice(1)
        )
      );
    }
    if (filters[0] && filters[1])
      spotData = spots.filter(
        (spots) =>
          spots.country === filters[0] && spots.probability == filters[1]
      );
    return spotData;
  }
);
