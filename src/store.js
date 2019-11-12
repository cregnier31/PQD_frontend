import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { defaultState, defaultReducer } from "./reducers";

const reducers = combineReducers({ defaultReducer });

export function initializeStore(initialState = defaultState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
