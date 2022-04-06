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
    default:
      return state;
  }
};
export default reducer;
