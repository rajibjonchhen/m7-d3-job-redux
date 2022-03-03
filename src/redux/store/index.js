import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favouriteReducer from "../reducers/favouriteReducer";
import jobsReducer from "../reducers/jobsReducer";
import thunk from "redux-thunk";

const composeFunction =  window.__REDUX_DEVTOOLS_EXTENSION__  || compose

export const initialState = {
    favourite:{
        favouriteJobs: [],
        favouriteCompanies: []
    },
    job:{
        jobs:[]
    }
}

const mergedReducer = combineReducers({
    favourite : favouriteReducer,
    job : jobsReducer,
})

const configureStore =  createStore(
    mergedReducer,
    initialState,
    composeFunction(applyMiddleware(thunk))
)

export default configureStore