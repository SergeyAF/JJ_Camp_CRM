import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch