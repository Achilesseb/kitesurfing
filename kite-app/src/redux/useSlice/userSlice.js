const INITIAL_STATE = {
  user: {
    userId: null,
    userInfo: null,
  },
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default userReducer;
