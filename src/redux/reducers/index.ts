import {combineReducers} from "redux";
import kidsListReducer from "./kidsList-reducer";
import commonReducer from "./common-reducer";

const rootReducer = combineReducers({
  kids: kidsListReducer,
  common: commonReducer,
})

export default rootReducer