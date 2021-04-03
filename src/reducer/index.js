import { combineReducers } from "redux";
import homeRenducer from "./homeReducer";
import yearReducer from "./yearReducer";
import landReducer from "./landReducer";
import launchReducer from "./launchReducer";

const rootReducer = combineReducers({
  home: homeRenducer,
  year: yearReducer,
  land: landReducer,
  launch: launchReducer,
});

export default rootReducer;
