import { createStore } from "redux";

export const initialState = {
    jobs:{
        jobLiked: []
    }
}

const configureStore =  createStore(
    mainReducer,
    initialState,
    window._REDUX_DEVTOOLS_EXTENSION_ &&  window._REDUX_DEVTOOLS_EXTENSION_()
)