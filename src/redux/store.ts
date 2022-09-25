import { combineReducers, createStore } from "redux";
// import TemplatesReducer from "./templates-reducer";

const rootReducer = combineReducers({
  // templates: TemplatesReducer,
});

type rootReducerType = typeof rootReducer;
export type RootState = ReturnType<rootReducerType>;

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

export default store;
