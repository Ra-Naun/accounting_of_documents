import { combineReducers } from "redux";

import {
  authReducer,
  userReducer,
} from "./userReducers";

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default reducer;
