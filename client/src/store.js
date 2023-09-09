import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {PostEnqReducer, GetAllEnqReducer} from './Reducers/messageReducer';
import {PostTrailClassReducer,GetAllTrialClassReducer} from './Reducers/trialClassReducer';

const FinalReducer = combineReducers({
  GetAllEnqReducer:GetAllEnqReducer,
  PostEnqReducer:PostEnqReducer,
  PostTrailClassReducer:PostTrailClassReducer,
  GetAllTrialClassReducer:GetAllTrialClassReducer
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
