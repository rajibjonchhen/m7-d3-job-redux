import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favouriteReducer from "../reducers/favouriteReducer.js";
import jobsReducer from "../reducers/jobsReducer.js";
import thunk from "redux-thunk";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

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

const persistConfig = {
key : 'root',
storage : localStorage,
transforms : [
    encryptTransform({
        secretKey : "hello-from-the-other-side"
    })
]
}
 
const mergedReducer = combineReducers({
    favourite : favouriteReducer,
    job : jobsReducer,
})

const persistedReducer = persistReducer(persistConfig, mergedReducer)

const configureStore =  createStore(
    persistedReducer,
    initialState,
    composeFunction(applyMiddleware(thunk))
)

const persistor = persistStore(configureStore) 

export {configureStore, persistor}