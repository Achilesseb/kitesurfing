import spotReducer from "./spotSlice/spotSlice";
import userReducer from "./userSlice/userSlice";
import { combineReducers } from "redux";

export default combineReducers({
  spots: spotReducer,
  user: userReducer,
});
