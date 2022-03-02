import { createStore } from "redux";
import mainReducer from "../reducers";

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

export default configureStore