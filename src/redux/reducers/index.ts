import {combineReducers} from "redux";
import kidsListReducer from "./kidsList-reducer";
import commonReducer from "./common-reducer";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
  kids: kidsListReducer,
  common: commonReducer,
  auth: authReducer,
})

export default rootReducer