import counterReducer from "./upDown";
import formReducer from "./formReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer, formReducer
});

export default rootReducer;