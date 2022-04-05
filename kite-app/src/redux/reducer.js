const INITIAL_STATE = {
  spots: [],
  selectedSpot: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SPOTS_DATA": {
      return { ...state, spots: state.spots.concat(action.payload) };
    }

    case "SET_SELECTED_DATA": {
      return { ...state, selectedSpot: (state.selectedSpot = action.payload) };
    }

    default:
      return state;
  }
};
export default reducer;
