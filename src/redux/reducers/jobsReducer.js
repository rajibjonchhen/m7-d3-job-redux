import { GET_JOBS } from "../actions";
import { initialState } from "../store";

const jobsReducer = ( state = initialState.job, action) => {
    switch(action.type){
        case GET_JOBS: 
            return{
                ...state,
                jobs:  action.payload
            }

        default: 
            return state
        }


}

export default jobsReducer 