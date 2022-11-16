import { combineReducers, createStore } from "redux";
import modalReducer from "./reducers/modal-reducer";

const rootReducer = combineReducers({
  modal: modalReducer,
});

type rootReducerType = typeof rootReducer;
export type RootState = ReturnType<rootReducerType>;

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

export default store;
