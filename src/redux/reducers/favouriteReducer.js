
import { COMPANY_LIKED, COMPANY_REMOVE_LIKED, JOBS_LIKED, JOBS_REMOVE_LIKED } from "../actions";
import { initialState } from "../store";


const favouriteReducer = (state = initialState.favourite, action) => {
    switch(action.type){
        case JOBS_LIKED: 
        return{
            ...state,
            favourite:{
                ...state.favourite,
                favouriteJobs: [...state.favourite.favouriteJobs, action.payload]
            }
        }
        
        case JOBS_REMOVE_LIKED: 
        return{
            ...state,
            favourite:{
                ...state.favourite,
                favouriteJobs: state.favourite.favouriteJobs.filter((job ) => job._id !== action.payload )
            }
        }

        case COMPANY_LIKED: 
        return{
            ...state,
            favourite:{
                ...state.favourite,
                favouriteCompanies: [...state.favourite.favouriteCompanies, action.payload]
            }
        }
        
        case COMPANY_REMOVE_LIKED: 
        return{
            ...state,
            favourite:{
                ...state.favourite,
                favouriteCompanies: state.favourite.favouriteCompanies.filter((company, i ) => i !== action.payload )
            }
        }
        default: 
        return state
    }
}

export default favouriteReducer