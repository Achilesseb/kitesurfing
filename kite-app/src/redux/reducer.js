const INITIAL_STATE = {
  spots: [],
  selectedSpot: {},
};

const reducer = (state = INITIAL_STATE, action) => {
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
    default:
      return state;
  }
};
export default reducer;
