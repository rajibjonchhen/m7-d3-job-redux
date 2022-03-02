import { bindActionCreators } from "redux";
import { JOBS_LIKED, JOBS_REMOVE_LIKED } from "../actions";
import { initialState } from "../store";


const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case JOBS_LIKED: {
            
        }
        
        case JOBS_REMOVE_LIKED: {

        }
        default: 
        return state
    }
}

export default mainReducer