import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducer";

const composedEnchancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composedEnchancer(applyMiddleware(thunk)));
export default store;
