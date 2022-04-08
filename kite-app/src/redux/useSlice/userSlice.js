const INITIAL_STATE = {
  user: {
    userId: null,
    userInfo: null,
  },
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_ID": {
      return { ...state, userId: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
