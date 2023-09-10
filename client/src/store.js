import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { PostEnqReducer, GetAllEnqReducer } from "./Reducers/messageReducer";
import { LoginAdminReducer } from "./Reducers/adminReducer";
import {
  PostTrailClassReducer,
  GetAllTrialClassReducer,
} from "./Reducers/trialClassReducer";
import { AddTaskReducer, GetTaskReducer } from "./Reducers/taskReducer";

const FinalReducer = combineReducers({
  GetAllEnqReducer: GetAllEnqReducer,
  PostEnqReducer: PostEnqReducer,
  PostTrailClassReducer: PostTrailClassReducer,
  GetAllTrialClassReducer: GetAllTrialClassReducer,
  LoginAdminReducer: LoginAdminReducer,
  AddTaskReducer: AddTaskReducer,
  GetTaskReducer: GetTaskReducer,
});

const InitialState = {};

let store;

if (process.env.NODE_ENV === "production") {
  store = createStore(FinalReducer, InitialState, applyMiddleware(thunk));
} else {
  store = createStore(
    FinalReducer,
    InitialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export default store;
