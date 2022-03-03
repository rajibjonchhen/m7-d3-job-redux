import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favouriteReducer from "../reducers/favouriteReducer.js";
import jobsReducer from "../reducers/jobsReducer.js";
import thunk from "redux-thunk";

const composeFunction =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose

export const initialState = {
    favourite:{
        favouriteJobs: [],
        favouriteCompanies: []
    },
    job:{
        jobs:[],
        isLoading:true,
        isError: false,
        jobDetail: {}
    }
}

const mergedReducer = combineReducers({
    favourite : favouriteReducer,
    job : jobsReducer,
})

export const configureStore =  createStore(
    mergedReducer,
    initialState,
    composeFunction(applyMiddleware(thunk))
)

