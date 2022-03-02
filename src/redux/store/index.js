import { createStore } from "redux";

export const initialState = {
    favourite:{
        favouriteJobs: [],
        favouriteCompanies: []
    }
}

const configureStore =  createStore(
    mainReducer,
    initialState,
    window._REDUX_DEVTOOLS_EXTENSION_ &&  window._REDUX_DEVTOOLS_EXTENSION_()
)