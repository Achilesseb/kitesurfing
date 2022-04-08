import spotReducer from "./spotSlice/spotSlice";
import userReducer from "./useSlice/userSlice";
import { combineReducers } from "redux";

export default combineReducers({
  spots: spotReducer,
  user: userReducer,
});
