
import { COMPANY_LIKED, COMPANY_REMOVE_LIKED, JOBS_LIKED, JOBS_REMOVE_LIKED } from "../actions";
import { initialState } from "../store";


const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case JOBS_LIKED: 
        return{
            
        }
        
        case JOBS_REMOVE_LIKED: 
        return{

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

export default mainReducer