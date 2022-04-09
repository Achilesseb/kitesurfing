const INITIAL_STATE = {
  userId: null,
  userInfo: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_ID": {
      return { ...state, userId: action.payload };
    }
    case "SET_USER_DATA": {
      return { ...state, userInfo: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
