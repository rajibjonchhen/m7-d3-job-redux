
import { COMPANY_LIKED, COMPANY_REMOVE_LIKED, JOBS_LIKED, JOBS_REMOVE_LIKED } from "../actions";
import { initialState } from "../store";


const favouriteReducer = (state = initialState.favourite, action) => {
    switch(action.type){
        case JOBS_LIKED: 
        return{
            ...state,
            favouriteJobs: [...state.favouriteJobs, action.payload]
        }
        
        case JOBS_REMOVE_LIKED: 
        return{
            ...state,
            favouriteJobs: state.favouriteJobs.filter((job) => job._id !== action.payload )
        }

        case COMPANY_LIKED: 
        return{
            ...state,
            favouriteCompanies: [...state.favouriteCompanies, action.payload]
            
        }
        
        case COMPANY_REMOVE_LIKED: 
        return{
            ...state,
           favouriteCompanies: state.favouriteCompanies.filter((company, i ) => i !== action.payload )
            
        }
        default: 
        return state
    }
}

export default favouriteReducer