import { GET_JOBS, IS_JOBS_LOADING, JOBS_LOADING_ERROR, JOB_DETAIL } from "../actions";
import { initialState } from "../store";

const jobsReducer = ( state = initialState.job, action) => {
    switch(action.type){
        case GET_JOBS: 
            return{
                ...state,
                jobs:  action.payload
            }

            case IS_JOBS_LOADING: 
            return{
                ...state,
               isLoading: action.payload
            }

            case JOBS_LOADING_ERROR: 
            return{
                ...state,
               isError: action.payload
            }

            case JOB_DETAIL: 
            return{
                ...state,
               jobDetail : action.payload
            }


        default: 
            return state
        }


}

export default jobsReducer 